import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';
import { getAllPostSlugs, getPostBySlug } from '../../lib/posts';

interface PostPageProps {
  title: string;
  content: MDXRemoteSerializeResult;
}

const PostPage: React.FC<PostPageProps> = ({ title, content }) => {
  return (
    <Layout>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{title}</h1>
        <MDXRemote {...content} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug as string);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      title: post.title,
      content: mdxSource,
    },
  };
};

export default PostPage;
