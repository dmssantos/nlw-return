import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail.adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "613d5b6cfc37c0",
    pass: "dd1a14252ac92e"
  }
});

export class NodemailerMailAdaper implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'David Santos <dms.santos_@hotmail.com>',
      subject,
      html: body,
    })
  }
}