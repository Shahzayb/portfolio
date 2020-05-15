import { useFormik } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom';
import { object as yupObject, string as yupString } from 'yup';
import tailwindConf from '../../tailwind.config';
import Alert from '../Alert';

const fadeInUpParent = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUpChild = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const validationSchema = yupObject().shape({
  name: yupString(),
  email: yupString()
    .trim()
    .required('email is required')
    .email('invalid email'),
  message: yupString().trim().required('message is required'),
});

type ErrorResponse = {
  errors: {
    param: string;
    msg: string;
  }[];
};

const sendMessage = (data: typeof initialValues) => {
  return fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      return res;
    } else {
      return Promise.reject(res);
    }
  });
};

function Contact() {
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 2000);
    }
    if (success) {
      setTimeout(() => setSuccess(false), 2000);
    }
  }, [error, success]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, formik) => {
      sendMessage(values)
        .then(() => {
          setSuccess(true);
          formik.resetForm();
        })
        .catch((res) => {
          console.log('res', res);
          if (res.status === 422) {
            return res.json().then(({ errors }: ErrorResponse) => {
              console.log('errors', errors);
              errors.forEach(({ param, msg }) => {
                formik.setFieldError(param, msg);
              });
            });
          }
          return Promise.reject(res);
        })
        .catch(() => {
          // failed to submit form
          setError(true);
        })
        .finally(() => {
          formik.setSubmitting(false);
        });
    },
  });

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUpParent}>
      <AnimatePresence>
        {error && (
          <Alert type="error" message="Failed to submit form. Try again." />
        )}
        {success && (
          <Alert
            type="success"
            message="Form is submitted. I'll reach you shortly."
          />
        )}
      </AnimatePresence>
      <motion.h1
        variants={fadeInUpChild}
        className="font-heading font-light text-3xl"
      >
        Get In Touch
      </motion.h1>
      <motion.h2
        variants={fadeInUpChild}
        className="font-heading font-light text-xl"
      >
        I'm currently available for work
      </motion.h2>
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="mt-4"
        noValidate
        autoComplete="off"
      >
        <motion.div variants={fadeInUpChild}>
          <div className="relative w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...formik.getFieldProps('name')}
              className="w-full bg-palette-bg-1 text-white placeholder-gray-500 p-2 mt-3 outline-none input-elm"
            />
            <div className="input-border-b"></div>
          </div>
          <div className="text-xs text-gray-600 p-1">optional</div>
        </motion.div>
        <motion.div variants={fadeInUpChild}>
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              {...formik.getFieldProps('email')}
              onBlur={() => {}}
              className="w-full bg-palette-bg-1 text-white placeholder-gray-500 p-2 mt-3 outline-none input-elm"
            />
            <div className="input-border-b"></div>
          </div>
          <div className="text-xs text-red-600 p-1">
            {formik.touched.email &&
              !!formik.errors.email &&
              formik.errors.email}
            &nbsp;
          </div>
        </motion.div>
        <motion.div variants={fadeInUpChild}>
          <div className="relative w-full">
            <textarea
              name="message"
              placeholder="Message"
              {...formik.getFieldProps('message')}
              onBlur={() => {}}
              className="w-full bg-palette-bg-1 text-white placeholder-gray-500 p-2 mt-3 outline-none input-elm"
              style={{ minHeight: '5rem' }}
            ></textarea>
            <div style={{ bottom: '5px' }} className="input-border-b"></div>
          </div>
          <div
            style={{ marginTop: '-5px' }}
            className="text-xs text-red-600 p-1"
          >
            {formik.touched.message &&
              !!formik.errors.message &&
              formik.errors.message}
            &nbsp;
          </div>
        </motion.div>
        <motion.div variants={fadeInUpChild} className="float-right mt-2">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-transparent text-palette-text-1 text-sm uppercase tracking-wider px-2 py-1 border border-palette-text-1 hover:bg-palette-text-1 hover:text-palette-bg-1 focus:bg-palette-text-1 focus:text-palette-bg-1 trans-500 cursor-pointer"
          >
            {formik.isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </motion.div>
      </form>
      <style jsx>{`
        .input-elm {
          border-bottom: 1px solid white;
        }
        .input-elm ~ .input-border-b {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background-color: ${tailwindConf.theme.colors.palette['text-1']};
        }
        .input-elm:focus ~ .input-border-b {
          width: 100%;
          transition: 0.5s;
        }
      `}</style>
    </motion.div>
  );
}

export default Contact;
