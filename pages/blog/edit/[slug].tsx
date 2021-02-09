import * as React from 'react';
import { useRouter } from 'next/router';
import BlogPost from '@/pages/blog/[slug]';
import { convertTitleToSlug } from '@/lib/utils';
import SaveOrEditIcon from '@/components/SaveOrEditIcon';

/**
 * This is a *Development only* route for hot reloading on changes to .md files.
 */
export default function HotReloadBlogPost() {
  // TODO 404 handling and redirect
  if (process.env.NODE_ENV !== 'development') return null;

  const router = useRouter();
  const [post, setPost] = React.useState({
    title: '', date: '', content: '', slug: ''
  });
  const slug = router.query.slug as string | undefined;
  const isNew = slug === 'new'; // Reserved name for new blog post

  React.useEffect(() => {
    if (slug) {
      const socket = new WebSocket('ws://localhost:3000');
      socket.onopen = () => {
        socket.send(slug);
      };
      socket.onmessage = ({ data }) => {
        const _post = JSON.parse(data);
        setPost({
          ..._post,
          ...(isNew && {
            date: new Date().toISOString(),
            slug: convertTitleToSlug(_post.title),
          }),
        });
      };
      return () => socket.close(1000);
    }
  }, [slug]);

  const onClick = () => fetch('/blog/edit/new/save')
    .then(() => alert('Post saved successfully'))
    .catch(err => {
      alert('An error occured');
      console.error(err);
    });

  return (
    <>
      {isNew && <SaveOrEditIcon icon={'save'} onClick={onClick} />}
      <BlogPost post={post} />
    </>
  );
}

