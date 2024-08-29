import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import NovelEditor from '../../components/NovelEditor';
import { savePost } from '../../lib/posts';

const EditorPage: React.FC = () => {
  const router = useRouter();

  const handleSave = async (title: string, slug: string, content: string) => {
    try {
      await savePost(slug, title, content);
      router.push('/blog');
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post');
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
      <NovelEditor initialContent="" onSave={handleSave} />
    </Layout>
  );
};

export default EditorPage;
