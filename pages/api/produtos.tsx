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
  if (req.method === 'POST') {
    const { code, description, price, quantity, unity } = req.body;
    if (!code || !description || !price || !quantity || !unity) {
      res.status(400).json({ error: 'Faltam dados' });
      return;
    }

    const { db } = await connect();

    const response = await db.collection('produtos').insertOne({
      code,
      description,
      price,
      quantity,
      unity,
    });
    res.status(200).json(response.ops[0]);
  } else {
    res.status(400).json({ error: 'Método errado' });
  }
};
