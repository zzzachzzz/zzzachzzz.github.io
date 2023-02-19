import { unified } from 'unified';
import markdownParser from 'remark-parse';
import emojiTransform from 'remark-emoji';
import type { Tree } from '@/types';

export default function markdownToTree(markdown: string): Tree {
  let tree: Tree = unified().use(markdownParser).parse(markdown);
  tree = unified().use(emojiTransform).runSync(tree);
  return tree;
}

