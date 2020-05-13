import React from 'react';
import { motion } from 'framer-motion';

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

function About() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUpParent}>
      <motion.h1
        variants={fadeInUpChild}
        className="font-heading font-light text-3xl"
      >
        Passionate Web Developer
      </motion.h1>
      <motion.p variants={fadeInUpChild} className="mt-3">
        I'm a Javascript/Typescript developer working in Express.js, React.js
        and MongoDB. My main focus right now is on the back-end development.
      </motion.p>
      <motion.p variants={fadeInUpChild} className="mt-3">
        I can easily create REST APIs and design databases. I can also create
        Single Page Apps in React.js/Next.js. I've been working on my side
        projects for 1+ year now. And i'm loving it.
      </motion.p>

      <motion.p variants={fadeInUpChild} className="mt-8">
        <a
          href="/resume.pdf"
          className="text-palette-text-1 text-xs uppercase tracking-wider mt-5 py-1 px-2 border border-palette-text-1 hover:bg-palette-text-1 hover:text-palette-bg-2 trans-500"
        >
          view resume
        </a>
      </motion.p>
    </motion.div>
  );
}

export default About;
