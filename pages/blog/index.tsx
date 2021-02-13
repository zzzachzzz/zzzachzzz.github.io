import styled from 'styled-components';
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
      <div style={{flexDirection: 'column', display: 'flex', maxWidth: '1200px'}}>
        {allPosts.map((post, i) => <BlogPreview title={post.title} urlTitle={post.slug} key={i} />)}
      </div>
    </div>
  );
}

const BlogPreview = ({ title, urlTitle }) => {
  const prismBlue = '#66d9ef';
  const prismGreen = '#a6e22e';
  const prismRed = '#f92672';

  return (
    <BlogLink href={`/blog/${urlTitle}`}>
      <div style={{fontSize: '1em', display: 'flex', alignItems: 'center'}}>
        <span style={{color: prismRed}}>{`{`}</span>
        <span style={{color: prismBlue}}>{`{`}</span>
        <span style={{color: prismGreen}}>{`{`}</span>
      </div>
      <p style={{marginLeft: '1em', marginRight: '1em', textAlign: 'center', display: 'flex', alignItems: 'center'}}>{title}</p>
      <div style={{fontSize: '1em', display: 'flex', alignItems: 'center'}}>
        <span style={{color: prismGreen}}>{`}`}</span>
        <span style={{color: prismBlue}}>{`}`}</span>
        <span style={{color: prismRed}}>{`}`}</span>
      </div>
    </BlogLink>
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
    color: #ae81ff;
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

