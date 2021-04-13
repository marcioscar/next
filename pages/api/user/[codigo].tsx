import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';

interface ErrorResponseType {
  error: string;
}

interface successResponseType {
  code: number;
  _id: string;
  description: string;
  quantity: number;
  price: number;
  unity: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | successResponseType>
): Promise<void> => {
  if (req.method === 'GET') {
    const { code } = req.body;
    if (!code) {
      res.status(400).json({ error: 'falta codigo' });
      return;
    }
    const { db } = await connect();
    const response = await db.collection('produtos').findOne({ code });
    if (!response){
      res.status(400).json({ error: 'Não existe produto com esse codigo' });
      return;
    }
    res.status(200).json(response);
  } else {
    res.status(400).json({ error: 'Método errado' });
  }
};
