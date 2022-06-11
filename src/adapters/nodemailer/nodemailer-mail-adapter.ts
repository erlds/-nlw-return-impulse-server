import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "be2725b952f837",
      pass: "b5aa90ac4646e1"
    }
  });

export class NodeMailerMailAdapter implements MailAdapter {

    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Eae <erlds5518@gmail.com>',
        subject: subject,
        html: body
    })
    }
}