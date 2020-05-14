import { NextPage } from 'next';
import React from 'react';
import SimpleBar from 'simplebar-react';
import { GoMarkGithub as GithubIcon, GoMail as MailIcon } from 'react-icons/go';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import { AiOutlineReddit as RedditIcon } from 'react-icons/ai';

import { motion } from 'framer-motion';

import tailwindConf from '../../tailwind.config';

import About from './About';
import Skill from './Skill';
import Service from './Service';
import Contact from './Contact';

import TabButton from '../TabButton';
import { useMenu } from '../../context/menu';

const fadeInUpParent = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      // delayChildren: 1,
    },
  },
  hidden: {
    transition: {
      staggerDirection: -1,
    },
  },
};

const fadeInUpChild = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AsideBar: NextPage = () => {
  const { tab } = useMenu();
  React.useEffect(() => {
    const body = document.querySelector('body');
    const overylay = document.querySelector('#overlay');
    if (body && overylay) {
      body.style.overflowY = 'hidden';
      overylay.classList.add('overlay');
    }
    return () => {
      if (body && overylay) {
        body.style.overflowY = 'auto';
        overylay.classList.remove('overlay');
      }
    };
  }, []);

  return (
    <motion.div
      // positionTransition
      key="menu"
      initial={{ x: '100%' }}
      animate={{
        x: 0,
        transition: {
          x: { type: 'spring', damping: 60, stiffness: 180 },
          delayChildren: 0.3,
        },
      }}
      exit={{
        x: '100%',
        transition: {
          ease: [0.6, 0.5, 0.2, 0.1],
        },
      }}
      className="fixed z-10 left-0 top-0 bottom-0 sm:left-auto sm:w-full sm:max-w-screen-sm right-0 bg-palette-bg-2 text-white h-full"
    >
      <motion.aside
        initial="hidden"
        animate="visible"
        variants={fadeInUpParent}
        className="max-w-sm w-full mx-auto pt-16 px-2"
      >
        <header className="pt-2">
          <nav>
            <ul className="flex flex-row flex-wrap">
              <motion.li variants={fadeInUpChild} className="pr-6 sm:pr-10">
                <TabButton
                  id="about"
                  title="About"
                  activeColor={tailwindConf.theme.colors.palette['text-1']}
                  inactiveColor="#fff"
                />
              </motion.li>
              <motion.li variants={fadeInUpChild} className="pr-6 sm:pr-10">
                <TabButton
                  id="skill"
                  title="Skills"
                  activeColor={tailwindConf.theme.colors.palette['text-1']}
                  inactiveColor="#fff"
                />
              </motion.li>
              <motion.li variants={fadeInUpChild} className="pr-6 sm:pr-10">
                <TabButton
                  id="service"
                  title="Services"
                  activeColor={tailwindConf.theme.colors.palette['text-1']}
                  inactiveColor="#fff"
                />
              </motion.li>
              <motion.li variants={fadeInUpChild} className="pr-6 sm:pr-10">
                <TabButton
                  id="contact"
                  title="Contact"
                  activeColor={tailwindConf.theme.colors.palette['text-1']}
                  inactiveColor="#fff"
                />
              </motion.li>
            </ul>
          </nav>
        </header>

        <motion.div className="pt-8" variants={fadeInUpChild}>
          <div style={{ height: 'calc(100vh - 174px)' }}>
            <SimpleBar
              className="pb-10"
              style={{
                height: '100%',
                paddingRight: '20px',
              }}
            >
              {tab === 'about' && <About />}
              {tab === 'skill' && <Skill />}
              {tab === 'service' && <Service />}
              {tab === 'contact' && <Contact />}
            </SimpleBar>
          </div>
        </motion.div>
        <motion.footer
          variants={fadeInUpChild}
          className="bg-palette-bg-2 h-10 absolute left-0 right-0 bottom-0"
        >
          <ul className="flex flex-row flex-wrap h-full justify-center">
            <li className="w-16">
              <a
                href="https://github.com/Shahzayb"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block hover:text-primary transition duration-500 ease-in-out w-full h-full link-t-border outline-none"
              >
                <GithubIcon className="mx-auto mt-2" />
              </a>
            </li>
            <li className="w-16">
              <a
                href="https://www.linkedin.com/in/itsshahzayb/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block hover:text-primary transition duration-500 ease-in-out w-full h-full link-t-border outline-none"
              >
                <LinkedinIcon className="mx-auto mt-2" />
              </a>
            </li>

            <li className="w-16">
              <a
                href="https://www.reddit.com/user/imshahzayb"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block hover:text-primary transition duration-500 ease-in-out w-full h-full link-t-border outline-none"
              >
                <RedditIcon className="mx-auto mt-2" />
              </a>
            </li>
            <li className="w-16">
              <a
                href="mailto:imshahzayb@gmail.com"
                className="relative block hover:text-primary transition duration-500 ease-in-out w-full h-full link-t-border outline-none"
              >
                <MailIcon className="mx-auto mt-2" />
              </a>
            </li>
          </ul>
        </motion.footer>
      </motion.aside>
      <style jsx>{`
        .body-height {
          height: calc(100vh - 172px);
        }

        .link-t-border {
          overflow: hidden;
        }

        .link-t-border:hover,
        .link-t-border:focus {
          color: ${tailwindConf.theme.colors.palette['text-1']};
        }

        .link-t-border::before {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background-color: ${tailwindConf.theme.colors.palette['text-1']};
          transform: translateX(-100%);
          transition: all ease 0.3s;
        }

        .link-t-border:hover::before,
        .link-t-border:focus::before {
          transform: translateX(0);
        }
      `}</style>
    </motion.div>
  );
};

export default AsideBar;
