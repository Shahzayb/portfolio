import React from 'react';
import { NextPage } from 'next';
import { GoMarkGithub as GithubIcon, GoMail as MailIcon } from 'react-icons/go';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import { AiOutlineReddit as RedditIcon } from 'react-icons/ai';

import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../components/Navbar';
import Menu from '../components/Menu/Menu';
import Link from 'next/link';
import ProjectSection from '../components/ProjectSection';
import ScrollDown from '../components/ScrollDown';
import { useMenu } from '../context/menu';

const fadeInUpParent = {
  visible: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const fadeInUpItem = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 2,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

const fadeInLeft = {
  hidden: {
    x: 60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const fadeInDown = {
  hidden: {
    y: -60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Home: NextPage<{}> = () => {
  const { open, toggleMenu, switchTab } = useMenu();
  return (
    <div className="overflow-x-hidden">
      <motion.div initial="hidden" animate="visible" variants={fadeInDown}>
        <Navbar />
      </motion.div>

      <AnimatePresence>{open && <Menu />}</AnimatePresence>

      <div className="min-h-screen flex items-center">
        <div className="px-4 md:px-8 w-full flex justify-between">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpParent}
            className="flex flex-col justify-center items-start"
          >
            <motion.h2 variants={fadeInUpItem} className="text-lg">
              Hi, I'm Shahzaib Sarwar.
            </motion.h2>
            <motion.h1
              variants={fadeInUpItem}
              className="font-heading text-4xl sm:text-6xl tracking-wider font-light"
            >
              Full-Stack Web Developer.
            </motion.h1>
            <motion.h3
              variants={fadeInUpItem}
              className="text-xs font-thin tracking-wide sm:text-sm mt-2"
            >
              Working in Express.js, React.js, and MongoDB Stack.
            </motion.h3>
            <motion.div
              variants={fadeInUpItem}
              className="flex items-start mt-8"
            >
              {/* <button
                onClick={() => {
                  setTab('about');
                  setMenuOpen(true);
                }}
                className="mr-5 text-palette-text-1 text-xs sm:text-sm uppercase tracking-wider px-2 py-1 sm:px-3 sm:py-2 border border-palette-text-1 hover:bg-palette-text-1 hover:text-palette-bg-1 trans-500"
              >
                About Me
              </button> */}
              <button
                onClick={() => {
                  switchTab('contact');
                  toggleMenu();
                }}
                className="mr-5 text-palette-text-1 text-xs sm:text-sm uppercase tracking-wider px-2 py-1 sm:px-3 sm:py-2 border border-palette-text-1 hover:bg-palette-text-1 hover:text-palette-bg-1 focus:bg-palette-text-1 focus:text-palette-bg-1 trans-500"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="hidden md:block"
          >
            <ul className="flex flex-col mt-6">
              <li className="my-3">
                <a
                  href="https://github.com/Shahzayb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 trans-500 hover:text-white"
                >
                  <GithubIcon size="25" />
                </a>
              </li>
              <li className="my-3">
                <a
                  href="https://www.linkedin.com/in/itsshahzayb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 trans-500 hover:text-white"
                >
                  <LinkedinIcon size="25" />
                </a>
              </li>

              <li className="my-3">
                <a
                  href="https://www.reddit.com/user/imshahzayb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 trans-500 hover:text-white"
                >
                  <RedditIcon size="25" />
                </a>
              </li>
              <li className="my-3">
                <a
                  href="mailto:imshahzayb@gmail.com"
                  className="text-gray-500 trans-500 hover:text-white"
                >
                  <MailIcon size="25" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInDown}
          className="absolute w-full flex flex-col items-center justify-center bottom-0"
        >
          <div className="pb-1 text-gray-600 uppercase text-sm tracking-widest">
            Projects
          </div>
          <motion.div
            animate={{ y: 8 }}
            transition={{
              flip: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            }}
          >
            <ScrollDown />
          </motion.div>
        </motion.div>
      </div>

      {/* Project Section */}
      <ProjectSection />

      {/* Footer*/}
      <section>
        <footer>
          <div className="text-center p-4 text-xs">
            {'© '}
            {new Date().getFullYear()}
            <Link href="/">
              <a> Shahzaib Sarwar</a>
            </Link>
            {'. '} All rights reserved.
          </div>
        </footer>
      </section>
      <style jsx>{`
        .full-body {
          height: calc(100vh - 48px);
          max-height: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Home;
