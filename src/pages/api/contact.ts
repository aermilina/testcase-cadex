// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
  error?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { name } = JSON.parse(req.body);
    res.status(200).json({ message: `Thank you for your interest, ${name}` });
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
