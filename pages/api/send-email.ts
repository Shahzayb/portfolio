import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';

import { sendEmail } from '../../utils/email';

interface Body {
  name?: string;
  email: string;
  message: string;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const errors = [];
    if (validator.isEmpty(req.body.email, { ignore_whitespace: true })) {
      errors.push({
        param: 'email',
        msg: 'email is required',
      });
    } else if (!validator.isEmail(req.body.email)) {
      errors.push({
        param: 'email',
        msg: 'invalid email address',
      });
    } else {
      req.body.email = validator.normalizeEmail(req.body.email);
    }

    if (validator.isEmpty(req.body.message, { ignore_whitespace: true })) {
      errors.push({
        param: 'message',
        msg: 'message is required',
      });
    } else {
      req.body.message = validator.trim(req.body.message);
    }

    if (!validator.isEmpty(req.body.name, { ignore_whitespace: true })) {
      req.body.name = validator.trim(req.body.name);
    }

    if (errors.length) {
      return res.status(422).send({ errors });
    }

    const { email, message, name }: Body = req.body;

    sendEmail(email, message, name)
      .then(() => {
        res.status(200).end();
      })
      .catch(() => {
        res.status(500).end();
      });
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      messgae:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};
