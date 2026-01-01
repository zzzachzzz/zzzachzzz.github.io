import * as path from 'path';

/**
 * Convert blog title to be url friendly
 * Example: 'My First Blog' -> 'my-first-blog'
 */
export const titleToSlug = (title: string): string => {
  title = title.replace(/[^\w\s]/g, '');  // Remove non alphanumerics and non whitespace
  title = title.trim();
  title = title.replace(/\s+/g, '-');  // Replace spaces with dashes
  title = title.toLowerCase();
  return title;
};

export const postsDirectory = path.join(process.cwd(), '_posts');

export const slugToFilepath = (slug: string) => `${postsDirectory}/${slug}.md`;

export const filepathToSlug = (filepath: string): string =>
  path.parse(filepath).name;

export const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return `${date.toLocaleString('default', {month:'long'})} ${date.getDate()}, ${date.getFullYear()}`;
};

