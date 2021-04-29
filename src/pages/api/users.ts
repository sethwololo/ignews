import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, nome: 'User1' },
    { id: 2, nome: 'User2' },
    { id: 3, nome: 'User3' },
  ];

  return response.json(users);
}
