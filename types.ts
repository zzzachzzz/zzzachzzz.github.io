import type { Node, Data } from 'unist';

export type Tree = Node<Data>;

export type NodeType =
  | 'strong'
  | 'emphasis'
  | 'delete'
  | 'heading'
  | 'paragraph'
  | 'list'
  | 'listItem'
  | 'break'
  | 'blockquote'
  | 'code'
  | 'inlineCode'
  | 'image'
  | 'link';

