import { GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import { getAllPosts } from '../../lib/posts';

interface BlogIndexProps {
  posts: Array<{ slug: string; title: string; description?: string }>;
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <PostList posts={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
