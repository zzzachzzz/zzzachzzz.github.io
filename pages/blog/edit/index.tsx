import Custom404 from '@/pages/404';

// Only exists to prevent /blog/edit (no [slug]) from being a valid path
export default function _404this() {
  return <Custom404 />;
}
