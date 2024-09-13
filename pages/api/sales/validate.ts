import type { NextApiRequest, NextApiResponse } from 'next';
import { validateOrders } from '../../../app/database';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '100mb', // Ajuste conforme necessário
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    res.setHeader('Content-Type', 'application/json');
    try {
      // O corpo da requisição já deve estar parseado pelo middleware do Next.js
      const fileContent = req.body;

      const results = await validateOrders(fileContent);
      res.status(200).json(results);
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
