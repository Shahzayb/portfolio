import SGMail from '@sendgrid/mail';
import { sendGridApiKey, sendToEmail, companyEmail, companyName } from '../env';

SGMail.setApiKey(sendGridApiKey);

export function sendEmail(email: string, message: string, name?: string) {
  const data = {
    html: `

        Name:  ${name} <br><br>
        Email:  ${email} <br><br>
        Message:  ${message} <br><br>
    `,
    text: `
        Name:  ${name} 
        Email:  ${email} 
        Message:  ${message} 
    `,
    to: sendToEmail,
    from: {
      email: companyEmail,
      name: companyName,
    },
    subject: 'Portfolio Contact',
  };

  return SGMail.send(data);
}
