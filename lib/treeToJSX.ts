import * as React from 'react';
import type { Tree } from '@/types';

type GetComponentForNode = (node: any) =>
    | keyof JSX.IntrinsicElements
    | ((props: { children: React.ReactNode; }) => JSX.Element);

export default function treeToJSX(
  tree: Tree,
  getComponentForNode: GetComponentForNode
): JSX.Element {
  let total = 0;
  function recursive(node: Tree): React.ReactNode {
    const nodeIdx = total;
    total++;

    if (node.type === 'text')
      return node['value'] as string;

    const children = (node['children'] as Tree[])
      ?.map(n => recursive(n));

    if (node.type === 'root')
      return children;

    const Component = getComponentForNode(node);
    return React.createElement(Component, { key: nodeIdx, children });
  }
  return recursive(tree) as JSX.Element;
}

