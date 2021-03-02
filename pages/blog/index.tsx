import styled, { css } from 'styled-components';
import Head from 'next/head'
import Link from '@/components/Link';
import Navigation from '@/components/Navigation';
import { getAllPosts } from '@/lib/api';
import { formatDate } from '@/lib/utils';
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
        {allPosts.map((post, i) =>
          <BlogPreview title={post.title} slug={post.slug} date={post.date} key={i} />
        )}
      </div>
    </div>
  );
}

const BlogPreview = ({ title, slug, date }: Props['allPosts'][number]) => (
  <BlogLink href={`/blog/${slug}`}>
    <div css="display: flex; align-items: center; font-size: 1.1em;">
      <Brace color="prismRed" />
      <Brace color="prismBlue" />
      <Brace color="prismGreen" />
    </div>
    <div css="margin: 0 1em; text-align: center;">
      <div css="margin-bottom: 0.7em;">{title}</div>
      <time css="font-size: 0.8em;" dateTime={date}>{formatDate(date)}</time>
    </div>
    <div css="display: flex; align-items: center; font-size: 1.1em;">
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
  padding: 1.1em 0.7em;
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

