import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

const toRight = {
  hidden: {
    x: '-110%',
  },
  visible: {
    x: '0%',
  },
};

function Alert({
  type,
  message,
}: {
  type: 'success' | 'error';
  message: string;
}) {
  let elm;
  if (type === 'error') {
    elm = document.querySelector('#error');

    if (!elm) {
      throw new Error('div#error element is required');
    }
  } else {
    elm = document.querySelector('#success');

    if (!elm) {
      throw new Error('div#success element is required');
    }
  }

  return ReactDOM.createPortal(
    <motion.div
      key="alert"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={toRight}
      className={`fixed left-0 bottom-0 ml-3 mb-3 shadow p-4 p-2 rounded-md z-30 ${
        type === 'error'
          ? 'bg-red-500 text-white border border-red-700'
          : 'bg-green-300 text-black border border-green-500'
      }`}
    >
      {message}
    </motion.div>,
    elm
  );
}

export default Alert;
