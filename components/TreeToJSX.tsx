import * as React from 'react';
import styled, { css } from 'styled-components';
import Prism from 'prismjs';
import A from './A';
import Link from './Link';
import Code from './Code';

export default function TreeToJSX({ tree }) {
  let total = 0;
  function recursive(node) {
    const nodeIdx = total;
    total++;

    if (node.type === 'text')
      return node.value;

    const children = node.children?.map(n => recursive(n));

    if (node.type === 'root')
      return children;

    const Component = getComponentForNode(node);
    return <Component key={nodeIdx} children={children} />
  }
  return recursive(tree);
}

const getComponentForNode = node => {
  const componentMatch = nodeTypeToComponentMap[node.type];
  if (!componentMatch)
    throw Error(`No component for node type: '${node.type}'`);
  return componentMatch(node);
};

const nodeTypeToComponentMap = {
  'strong'     : ()   => 'b',
  'emphasis'   : ()   => 'i',
  'delete'     : ()   => 'del',
  'heading'    : node => `h${node.depth}`,
  'paragraph'  : ()   => P,
  'list'       : node => node.ordered ? 'ol' : 'ul',
  'listItem'   : ()   => Li,
  'break'      : ()   => 'br',
  'blockquote' : ()   => BlockQuote,
  'code'       : node => ()    => <CodeBlock lang={node.lang} children={node.value} />,
  'inlineCode' : node => ()    => <Code children={node.value} />,
  'image'      : node => ()    => <Img src={node.url} alt={node.alt} />,
  'link'       : node => props => {
    // Use Next Link component for relative (internal) links
    const Component = (node.url as string).startsWith('/') ? Link : A;
    return <Component href={node.url} children={props.children} />;
  },
};

type PropsChildren = {
  children: React.ReactNode;
};

const P = ({ children }: PropsChildren) => <p>{children}</p>;

// Add leading whitespace to <code> className due to className mismatch caused by Prism injecting class
const CodeBlock = ({ lang, children }: { lang?: string; children: string; }) => {
  const langCls = ` language-${lang || 'none'}`;
  if (lang) {
    const highlightedCode = Prism.highlight(children, Prism.languages[lang], lang);
    return (
      <Pre className={langCls}>
        <code className={" " + langCls} dangerouslySetInnerHTML={{__html: highlightedCode}}></code>
      </Pre>
    );
  } else {
    return (
      <Pre className={langCls}>
        <code className={" " + langCls}>{children}</code>
      </Pre>
    );
  }
};

// Other styles for top-level pre elements defined in:
// pages/blog/[slug].tsx BlogContentContainer
const Pre = styled.pre`
  margin-left: auto !important;
  margin-right: auto !important;
`;

const BlockQuote = styled.blockquote`
  color: #aaa;
  font-style: italic;
  border-left: 2px solid #ddd;
  margin-left: 0;
  margin-right: 0;
  padding-left: 10px;
`;

const Li = styled.li`
  & > p {
    margin: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

