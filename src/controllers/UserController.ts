import { Request, Response } from 'express';

const users = [
  { name: 'Gabriel Araujo', username: 'gabrieldeoa' }
];

export default {
  async  index(req: Request, res: Response) {
    return res.json(users);
  }
};