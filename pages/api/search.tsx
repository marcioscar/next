import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';

interface ErrorResponseType {
  error: string;
}


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | object[]>
): Promise<void> => {
  if (req.method === 'GET') {
    const { description } = req.body;
    if (!description) {
      res.status(400).json({ error: 'falta descricao' });
      return;
    }
    const { db } = await connect();
    const response = await db
      .collection('produtos')
      .find({ description: new RegExp(description, `i`) })
      .toArray();
    if (response.length === 0) {
      res.status(400).json({ error: 'Não existe produto com essa descricao' });
      return;
    }
    res.status(200).json(response);
  } else {
    res.status(400).json({ error: 'Método errado' });
  }
};
