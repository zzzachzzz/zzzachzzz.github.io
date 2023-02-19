import { Feed } from 'feed';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import type { Tree, NodeType } from '@/types';
import { convertTitleToSlug } from './utils';
import treeToJSX from './treeToJSX';
import markdownToTree from './markdownToTree';
import { getAllPosts } from './api';
import { BLOG_TITLE, BLOG_DESCRIPTION, BASE_URL } from '../constant';

export function generateBlogRssFeed(): string {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'content',
  ]);

  const blogUrl = BASE_URL + '/blog';
  const feed = new Feed({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    id: blogUrl,
    link: blogUrl,
    language: 'en',
    favicon: BASE_URL + '/favicon.ico',
    image: BASE_URL + '/favicon.png',
    copyright: '',
    updated: new Date(posts[0].date),
    generator: 'Next.js',
    feedLinks: {
      rss: blogUrl + '/rss.xml',
    },
    author: {
      name: 'Zach Rosenberger',
      email: 'zach1rosen@gmail.com',
    },
  });

  for (const post of posts) {
    const link = `${blogUrl}/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: link,
      link,
      date: new Date(post.date),
      content: treeToHtml(markdownToTree(post.content)),
    });
  }

  return feed.rss2();
}

export function treeToHtml(tree: Tree): string {
  return ReactDOMServer.renderToStaticMarkup(
    treeToJSX(tree, getComponentForNode)
  );
}

type NodeTypeToComponentMap = Record<
  NodeType,
  (node: any) =>
    | keyof JSX.IntrinsicElements
    | ((props: { children: React.ReactNode; }) => JSX.Element)
>;

const nodeTypeToComponentMap: NodeTypeToComponentMap = {
  'strong'     : ()   => 'b',
  'emphasis'   : ()   => 'i',
  'delete'     : ()   => 'del',
  'heading'    : node => ({ children }) => {
    const h = `h${node.depth as number}`;
    const text = node.children[0].value as string
    const id = convertTitleToSlug(text);
    return React.createElement(h, { id }, children);
  },
  'paragraph'  : ()   => 'p',
  'list'       : node => node.ordered ? 'ol' : 'ul',
  'listItem'   : ()   => 'li',
  'break'      : ()   => 'br',
  'blockquote' : ()   => 'blockquote',
  'code'       : node => () =>
    React.createElement('pre', null, React.createElement('code', null, node.value)),
  'inlineCode' : node => () => React.createElement('code', null, node.value),
  'image'      : node => () => {
    const props = {
      src: (node.url as string).startsWith('/')
        ? BASE_URL + node.url
        : node.url,
      alt: node.alt,
    };
    return React.createElement('img', props);
  },
  'link'       : node => ({ children }) => {
    const href = (node.url as string).startsWith('/')
      ? BASE_URL + node.url
      : node.url;
    return React.createElement('a', { href }, children);
  },
};

const getComponentForNode = (node: Tree) => {
  const componentMatch = nodeTypeToComponentMap[node.type as NodeType];
  if (!componentMatch)
    throw Error(`No component for node type: '${node.type}'`);
  return componentMatch(node);
};

