import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import Navigation from '@/components/Navigation';
import BlogContent from '@/components/BlogContent';
import SaveOrEditIcon from '@/components/SaveOrEditIcon';
import { getPostBySlug, getAllPosts } from '@/lib/api';
import { formatDate } from '@/lib/utils';

type Props = {
  post: {
    title: string;
    date: string;
    content: string;
    slug: string;
  }
};

export default function BlogPost({ post }: Props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      {process.env.NODE_ENV === 'development' && router.pathname.split('/')[2] !== 'edit' && (
        <SaveOrEditIcon
          icon="edit"
          onClick={() => router.push(`/blog/edit/${router.query.slug}`)}
        />
      )}
      <Navigation postSlug={post.slug} />
      <main>
        <header>
          <h1 css="text-align: center; margin: 2em; margin-bottom: 0.2em;">{post.title}</h1>
          <p css="font-size: 0.9em; text-align: center;">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
        </header>
        <article>
          <BlogContent content={post.content} />
        </article>
      </main>
    </div>
  );
}

type Params = { slug: string; };

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const post = getPostBySlug(params.slug, ['title', 'date', 'content', 'slug']);

  return {
    props: {
      post: {
        ...post,
      }
    }
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => ({
      params: { slug: post.slug }
    })),
    fallback: false,
  }
};

