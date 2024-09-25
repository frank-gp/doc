import { Resend } from "resend";
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY || '');

export const sendEmail = async (to: string, subject: string, text: string): Promise<any> => {
  try {
    const response = await resend.emails.send({
      from: 'Frank GP <onboarding@resend.dev>',
      to: to,
      subject: subject,
      text: text,
    });
    console.log('Email sent:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
