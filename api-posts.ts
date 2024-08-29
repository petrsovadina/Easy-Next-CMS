import type { NextApiRequest, NextApiResponse } from 'next';
import { savePost } from '../../lib/posts';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { slug, title, content } = req.body;
    try {
      await savePost(slug, title, content);
      res.status(200).json({ message: 'Post saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving post' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
