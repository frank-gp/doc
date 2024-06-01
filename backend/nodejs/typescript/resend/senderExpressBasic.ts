import { Resend } from 'resend';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const app = express();

app.get('/', async (req: Request, res: Response) => {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'user123@gmail.com',
    subject: 'Hello World',
    html: '<strong>it works!</strong>',
  });

  if (error) {
    return res.status(400).json(error);
  }

  return res.status(200).json(data);
})

app.listen(3000, ()=>{
  console.log('Listening on port 3000');
})