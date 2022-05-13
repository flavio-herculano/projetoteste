import { NextApiRequest, NextApiResponse } from "next";

export default function hello(req: NextApiRequest, res: NextApiResponse): void{
  
  
  const { method, query } = req;
  
  switch (method) {
    case 'GET':
      res.status(200).json([
        {id: 1, description: "Produto1", method, query: query.username},
        {id: 2, description: "Produto2", method, query: query.username},
        {id: 3, description: "Produto3", method, query: query.username}
      ])
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Método ${method} Não permitido`)
  }
}