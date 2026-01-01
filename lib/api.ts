import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { getPathToBlogPost, postsDirectory, convertTitleToSlug } from './utils';

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
    .filter(filename => filename !== 'new.md')
    .map(filename => filename.replace(/\.md$/, ''));
}

type BlogFrontMatter = {
  title: string;
  date: string;
};

type Fields = BlogFrontMatter & {
  slug: string;
  content: string;
};

export function getPostBySlug<T extends keyof Fields>(
  slug: string, fields: Array<T> = []
): Pick<Fields, typeof fields[number]> {
  const filepath = getPathToBlogPost(slug);
  return getPostByFilepath(filepath, fields);
}

export function getPostByFilepath<T extends keyof Fields>(
  filepath: string, fields: Array<T> = []
): Pick<Fields, typeof fields[number]> {
  const fileContents = fs.readFileSync(filepath, 'utf8')
  const matter_ = matter(fileContents);
  const { content } = matter_;
  const data = matter_.data as BlogFrontMatter;
  const slug = path.parse(filepath).name;
  const allItems = {
    ...data,
    slug,
    content,
  };

  function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
    const ret: any = {};
    keys.forEach(key => {
      ret[key] = obj[key];
    })
    return ret;
  }

  const items = pick(allItems, ...fields)

  return items;
}

export function getAllPosts<T extends keyof Fields>(
  fields: Array<T> = []
): Array<Pick<Fields, typeof fields[number]>> {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // Sort posts by date in descending order
    .sort((post1, post2) => (((post1 as any).date > (post2 as any).date ? -1 : 1)));
  return posts;
}

/**
 * Writes a new file from the contents of _posts/new.md
 */
export function writeNewPostToFile() {
  const { title, content } = getPostBySlug('new', ['title', 'content']);
  const date = new Date().toISOString();
  const newFileContents = matter.stringify(content, { title, date });
  const newSlug = convertTitleToSlug(title);
  fs.writeFileSync(getPathToBlogPost(newSlug), newFileContents);
}

