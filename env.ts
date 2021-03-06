import { from } from 'env-var';
import validator from 'validator';

const env = from(process.env, {
  asEmail: (value): string => {
    const isEmail = validator.isEmail(value);
    const email = validator.normalizeEmail(value);

    if (!isEmail && !email) {
      throw new Error('Invalid email address');
    }

    return email as string;
  },
});

export const sendGridApiKey = env.get('SENDGRID_API_KEY').required().asString();
export const sendToEmail = env.get('SEND_TO_EMAIL').required().asEmail();

export const companyName = env.get('COMPANY_NAME').required().asString();
export const companyEmail = env.get('COMPANY_EMAIL').required().asEmail();
