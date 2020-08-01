import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Gabriel Araujo', email: 'gabrielaraujo.dev@gmail.com' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    
    const to = { name: 'Gabriel Araujo', email: 'gabrielaraujo.dev@gmail.com' };
    const message = { subject: 'Hello World', body: 'Seja bem vindo.' };

    emailService.sendMail({ to, message });

    res.send();
  }
};