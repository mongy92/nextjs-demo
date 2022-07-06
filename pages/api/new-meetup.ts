import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../helpers/db';

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    title: string;
    description: string;
    address: string;
    image: string;
  };
}

async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    await meetupsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: 'Meetup Added' });
  }
}

export default handler;
