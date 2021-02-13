import styled, { css } from 'styled-components';
import Head from 'next/head'
import Link from '@/components/Link';
import Navigation from '@/components/Navigation';
import { getAllPosts } from '@/lib/api';
import { InferGetStaticPropsType } from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function BlogList({ allPosts }: Props) {
  return (
    <div>
      <Head>
        <title>Web Dev Blog - zzzachzzz</title>
        <meta
          name="description"
          content="JavaScript, TypeScript, and React by example with code."
        />
      </Head>
      <Navigation />
      <h1 css="text-align: center;">Recent Posts</h1>
      <div css="flex-direction: column; display: flex; max-width: 1200px; margin: 0 auto;">
        {allPosts.map((post, i) => <BlogPreview title={post.title} slug={post.slug} key={i} />)}
      </div>
    </div>
  );
}

const BlogPreview = ({ title, slug }: { title: string; slug: string; }) => (
  <BlogLink href={`/blog/${slug}`}>
    <div css="display: flex; align-items: center;">
      <Brace color="prismRed" />
      <Brace color="prismBlue" />
      <Brace color="prismGreen" />
    </div>
    <span css="margin: 1em; text-align: center; display: flex; align-items: center;">{title}</span>
    <div css="display: flex; align-items: center;">
      <Brace color="prismGreen" close />
      <Brace color="prismBlue" close />
      <Brace color="prismRed" close />
    </div>
  </BlogLink>
);

type BraceProps = {
  color: 'prismRed' | 'prismBlue' | 'prismGreen';
  close?: boolean;
};

const Brace = ({ color, close = false }: BraceProps) => {
  const _css = css`color: ${({ theme }) => theme[color]};`;
  return (
    <span css={_css}>
      {close ? '}' : '{'}
    </span>
  );
};

const BlogLink = styled(Link)`
  min-height: 60px;
  background: #272822;
  border-radius: 0.3em;
  margin: 1.5em;
  padding: 1.1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.1em;
  color: white;

  &:hover {
    color: ${({ theme }) => theme.prismPurple};
  }
`;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
  ]);

  return {
    props: { allPosts }
  };
}

