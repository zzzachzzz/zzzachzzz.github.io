import styled from 'styled-components';
import Head from 'next/head'
import { useRouter } from 'next/router';
import Link from '@/components/Link';
import Navigation from '@/components/Navigation';
import BlogContent from '@/components/BlogContent';
import { getAllPosts } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { InferGetStaticPropsType } from 'next'
import { BLOG_TITLE, BLOG_DESCRIPTION } from '@/constant';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function BlogList({ allPosts }: Props) {
  return (
    <div>
      <Head>
        <title>{BLOG_TITLE}</title>
        <meta
          name="description"
          content={BLOG_DESCRIPTION}
        />
      </Head>
      <Navigation />
      <h1 css="text-align: center;">Recent Posts</h1>
      <div css="flex-direction: column; display: flex; max-width: 1200px; margin: 0 auto;">
        {allPosts.map((post, i) =>
          <BlogPreview
            title={post.title}
            slug={post.slug}
            date={post.date}
            content={post.content}
            key={i}
          />
        )}
      </div>
    </div>
  );
}

// Used to only partially render a blog's content, to be shown as a preview
const blogPreviewNumChildren = 5;

const BlogPreview = ({ title, slug, date, content }: Props['allPosts'][number]) => {
  const router = useRouter();
  const href = `/blog/${slug}`;
  return (
    <Article onClick={() => router.push(href)}>
      <Header css="text-align: center;">
        <BlogLink
          href={href}
          css={`
            padding: 0.7em 2em;
            margin: 0 auto;
            transition: background 0.3s, color 0.3s;
          `}
        >
          <h2 css="margin-bottom: 0.4em;">{title}</h2>
          <time css="font-size: 0.8em;" dateTime={date}>{formatDate(date)}</time>
        </BlogLink>
      </Header>
      <ContentPreview>
        <Shadow />
        <BlogContent
          content={content}
          numChildren={blogPreviewNumChildren}
        />
      </ContentPreview>
      <BlogLink
        href={href}
        css={`
          display: block; text-align: center; margin: 0 auto;
          width: min-content; white-space: nowrap;
          opacity: 0; transition: opacity 0.3s, color 0.3s;
        `}
      >
        Continue Reading
      </BlogLink>
    </Article>
  );
};

const ContentPreview = styled.div`
  height: 300px;
  overflow: hidden;
  font-size: 0.8rem;
  position: relative;
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  box-shadow: ${({ theme }) => `0px 0px 10px 10px ${theme.bg}`};
  width: 100%;
`;

const Article = styled.article`
  border-radius: 0.3em;
  border: 3px solid #919191;
  transition: border-color 0.3s;
  padding: 0.2em;
  cursor: pointer;
  margin: 1.5rem;

  &:hover {
    border-color: ${({ theme }) => theme.prismPurple};
  }
  &:hover a {
    color: ${({ theme }) => theme.prismPurple};
    opacity: 1;
  }

  &:not(:hover) header a {
    background: transparent;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const BlogLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'content',
  ]);

  return {
    props: { allPosts }
  };
}

