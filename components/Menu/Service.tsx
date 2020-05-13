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

function Skill() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUpParent}>
      <motion.h1
        variants={fadeInUpChild}
        className="font-heading font-light text-3xl"
      >
        I Can &#8213;
      </motion.h1>
      <div className="pl-4">
        <motion.ul variants={fadeInUpChild} className="pt-4 pl-6 list-disc">
          <li className="py-1">Create REST API in Express.js</li>
          <li className="py-1">Create API in GraphQL</li>
          <li className="py-1">Create your database in MongoDB</li>
          <li className="py-1">Create your database in MySQL</li>
          <li className="py-1">Style your UI with CSS3</li>
          <li className="py-1">Create your front-end with React.js/Next.js</li>
          <li className="py-1">Write Unit Tests</li>
          <li className="py-1">Integrate front-end to API</li>
          <li className="py-1">Create real-time apps with Web Socket</li>
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default Skill;
