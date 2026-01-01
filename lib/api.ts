import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { slugToFilepath, postsDirectory, titleToSlug } from './utils';

export function getAllPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
    .filter(filename => filename !== 'new.md')
    .map(filename => filename.replace(/\.md$/, ''));
}

type BlogFrontMatter = {
  title: string;
  date: string;
};

type BlogPost = BlogFrontMatter & {
  slug: string;
  content: string;
};

export function getPostBySlug(slug: string): BlogPost {
  const filepath = slugToFilepath(slug);
  return getPostByFilepath(filepath);
}

export function getPostByFilepath(filepath: string): BlogPost {
  const fileContents = fs.readFileSync(filepath, 'utf8')
  const matter_ = matter(fileContents);
  const { content } = matter_;
  const { title, date } = matter_.data as BlogFrontMatter;
  const slug = path.parse(filepath).name;
  return {
    title,
    date,
    slug,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    // Sort posts by date in descending order
    .sort((post1, post2) => post1.date > post2.date ? -1 : 1);
}

/**
 * Writes a new file from the contents of _posts/new.md
 */
export function writeNewPostToFile(): void {
  const { title, content } = getPostBySlug('new');
  const slug = titleToSlug(title);
  const date = new Date().toISOString();
  const newFileContents = matter.stringify(content, { title, date });
  fs.writeFileSync(slugToFilepath(slug), newFileContents);
}

