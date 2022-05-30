import express from 'express'
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "613d5b6cfc37c0",
    pass: "dd1a14252ac92e"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = 

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'David Santos <dms.santos_@hotmail.com>',
    subject: 'Novo Feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo de feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  })

  return res.status(201).json({ data: feedback });
})