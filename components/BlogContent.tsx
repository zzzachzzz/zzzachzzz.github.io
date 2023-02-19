import styled from 'styled-components';
import TreeToJSX from '@/components/TreeToJSX';
import markdownToTree from '@/lib/markdownToTree';
import type { Tree } from '@/types';

type Props = {
  content: string;
  /** Optionally specify number of root children to render from `tree` */
  numChildren?: number;
};

const BlogContent = ({ content, numChildren }: Props) => {
  const tree = markdownToTree(content);
  if (numChildren !== undefined)
    tree['children'] = (tree['children'] as Tree[])?.slice(0, numChildren);

  return (
    <Container>
      <TreeToJSX tree={tree} />
    </Container>
  );
};

const Container = styled.div`
  font-size: 1.2em;
  line-height: 1.4em;
  letter-spacing: 0.01em;
  overflow-wrap: break-word;
  padding: 1.1em;
  margin: 0 auto;
  & > *:not(pre) {
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
  }
  & > pre {
    width: 90vw;
    max-width: 1100px;
  }
`;

export default BlogContent;
