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
        Technical Skills
      </motion.h1>
      <div className="pl-4">
        <motion.h2
          variants={fadeInUpChild}
          className="font-heading font-light text-xl tracking-wider py-2"
        >
          Proficient in &#8213;
        </motion.h2>
        <motion.ul variants={fadeInUpChild} className="pl-10 list-disc">
          <li>Javascript</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>CSS3</li>
          <li>HTML5</li>
        </motion.ul>
        <motion.h2
          variants={fadeInUpChild}
          className="font-heading font-light text-xl tracking-wider py-2"
        >
          Familiar with &#8213;
        </motion.h2>
        <motion.ul variants={fadeInUpChild} className="pl-10 list-disc">
          <li>Typescript</li>
          <li>GraphQL</li>
          <li>MySQL</li>
          <li>Next.js</li>
          <li>Git</li>
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default Skill;
