import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb"


const hello = async(req: NextApiRequest, res: NextApiResponse) => {
  
  
  const { method } = req;
  
  switch (method) {
    case 'GET':

      await clientPromise
      
      const client = await clientPromise;
      const db = await client.db();

      const data = await db.collection('user').find().toArray()

      res.status(200).json(data)
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Método ${method} Não permitido`)
  }
}

export default hello