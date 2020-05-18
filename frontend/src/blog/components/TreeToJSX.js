import React from 'react';

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
  'listItem'   : ()   => 'li',
  'break'      : ()   => 'br',
  'blockquote' : ()   => 'blockquote',
  'code'       : node => ()    => <CodeBlock lang={node.lang} children={node.value} />,
  'inlineCode' : node => ()    => <code children={node.value} />,
  'link'       : node => props => <A url={node.url} title={node.title} children={props.children} />,
};

const P = props => <p>{props.children}</p>;

const A = props => (
  <a href={props.url} title={props.title} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

const CodeBlock = props => (
  <pre className={`language-${props.lang}`}>
    <code>
      {props.children}
    </code>
  </pre>
);

