import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, '')
      }
    };
  });
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    content
  };
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '');
    const { title } = getPostBySlug(slug);
    return {
      slug,
      title
    };
  });
}

export async function savePost(slug: string, title: string, content: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const data = matter.stringify(content, { title });
  fs.writeFileSync(fullPath, data);
}
