import React from 'react';
import { BsThreeDotsVertical as ThreeDotsV, BsX } from 'react-icons/bs';
import { FiExternalLink as WebsiteLinkIcon, FiCode } from 'react-icons/fi';
import { NextPage } from 'next';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion, AnimatePresence } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  imgSrc: string;
  features: string[];
  githubUrl: string;
  websiteUrl: string;
}

const fadeInUp = {
  hidden: {
    y: 10,
    opacity: 0.4,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeOut',
    },
  },
};

const ProjectCard: NextPage<Props> = ({
  title,
  description,
  imgSrc,
  features,
  githubUrl,
  websiteUrl,
}) => {
  const [open, setOpen] = React.useState(false);
  const toggleHandler = React.useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const controls = useAnimation();
  const [cardRef, cardInView] = useInView();

  React.useEffect(() => {
    if (cardInView) {
      controls.start('visible');
    }
    // else {
    //   controls.start('hidden');
    // }
  }, [controls, cardInView]);

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="overflow-hidden my-10 mx-5 relative w-full max-w-sm bg-palette-bg-3 text-palette-text-3 shadow-2xl"
    >
      <button onClick={toggleHandler} className="focus:outline-none">
        <img
          className="w-full h-full object-contain"
          src={imgSrc}
          alt={title}
        />
      </button>
      <div className="p-4 border-t-2 border-black bg-white">
        <div className="my-2 flex items-center justify-between">
          <h1 className="text-2xl">
            <button onClick={toggleHandler}>{title}</button>
          </h1>
          <button onClick={toggleHandler}>
            <ThreeDotsV size="20" />
          </button>
        </div>

        <p>{description}</p>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {
                y: '100%',
                transition: {
                  ease: [0.6, 0.5, 0.2, 0.1],
                },
              },
              visible: {
                y: 0,
                transition: {
                  x: { type: 'spring', damping: 60, stiffness: 180 },
                },
              },
            }}
            key="features"
            className="absolute top-0 left-0 w-full h-full p-4 bg-white"
          >
            <header className="flex justify-between items-center">
              <button onClick={toggleHandler}>
                <h1 className="text-xl">Features</h1>
              </button>

              <button onClick={toggleHandler}>
                <BsX size="25" />
              </button>
            </header>
            <div
              style={{ height: '80%', paddingRight: '20px', overflow: 'auto' }}
            >
              <main className="my-8">
                <ul className="list-disc ml-5 child-mb">
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </main>
            </div>
            <footer className="border-t-2 border-black">
              <div className="flex items-center justify-between mt-4">
                <a
                  href={websiteUrl}
                  className="flex flex-col items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebsiteLinkIcon size="25" />
                  <span className="py-1"> Website</span>
                </a>
                <a
                  href={githubUrl}
                  className="flex flex-col items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiCode size="25" />
                  <span className="py-1"> Code</span>
                </a>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        .child-mb > * {
          margin-bottom: 10px;
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
