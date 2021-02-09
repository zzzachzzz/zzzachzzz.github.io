import * as path from 'path';

/**
 * Convert blog title to be url friendly
 * Example: 'My First Blog' -> 'my-first-blog'
 */
export const convertTitleToSlug = (title: string): string => {
  title = title.replace(/[^\w\s]/g, '');  // Remove non alphanumerics and non whitespace
  title = title.trim();
  title = title.replace(/\s+/g, '-');  // Replace spaces with dashes
  title = title.toLowerCase();
  return title;
};

export const postsDirectory = path.join(process.cwd(), '_posts');

export const getPathToBlogPost = (slug: string) => `${postsDirectory}/${slug}.md`;

