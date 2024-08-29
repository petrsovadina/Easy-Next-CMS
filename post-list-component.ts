import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Post {
  slug: string;
  title: string;
  description?: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.slug}>
          <CardHeader>
            <CardTitle>
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </CardTitle>
            {post.description && (
              <CardDescription>{post.description}</CardDescription>
            )}
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
