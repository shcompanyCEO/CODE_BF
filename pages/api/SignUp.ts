import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('http://localhost:3001/users');
    const data = response.data;
    console.log('sean', data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data from Node.js API' });
  }
}
