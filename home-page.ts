import Layout from '../components/Layout';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold mb-8">Welcome to Our Blog</h1>
        <p className="text-xl mb-8">Discover our latest articles and insights.</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/blog">Read Blog</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/editor">Create Post</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
