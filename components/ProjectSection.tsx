import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const fadeInUpItem = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

function ProjectSection() {
  const controls = useAnimation();
  const [h1Ref, isH1InView] = useInView();

  React.useEffect(() => {
    if (isH1InView) {
      controls.start('visible');
    }
    // else {
    //   controls.start('hidden');
    // }
  }, [controls, isH1InView]);

  return (
    <section
      id="project-section"
      className="py-8 px-1 sm:px-10 bg-palette-bg-3"
    >
      <motion.h1
        ref={h1Ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUpItem}
        className="text-palette-text-3 text-4xl text-center my-10"
      >
        Projects
      </motion.h1>
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-around">
        <ProjectCard
          title="Pistagram"
          description="A clone of Instagram with limited features like image upload, like
        image, comment, follow, unfollow, search etc..."
          imgSrc="/pistagram.jpeg"
          features={[
            <>
              Created backend <strong>REST API</strong> with{' '}
              <strong>Express.js</strong>
            </>,
            <>
              Wrote <strong>unit test</strong> for the whole API
            </>,
            <>
              Created database in <strong>MongoDB</strong>
            </>,
            <>
              Used <strong>React.js</strong> on frontend
            </>,
            <>
              Created UI with <strong>MaterialUI</strong>
            </>,
            <>
              Managed client side state in <strong>React-Query</strong>
            </>,
            <>
              Used <strong>Cloudinary</strong> as media storage
            </>,
            <>
              Authentication with <strong>Google OAuth 2.0</strong>
            </>,
            <>
              <strong>Responsive images</strong> to reduce bandwidth
            </>,
          ]}
          githubUrl="https://github.com/Shahzayb/pistagram"
          websiteUrl="https://pistagraam.herokuapp.com/"
        />
        <ProjectCard
          title="Freemage"
          description="Its a clone of Unsplash with features like login, logout, image upload, like
        image, search user, search image..."
          imgSrc="/freemage.jpeg"
          features={[
            <>
              Created backend <strong>REST API</strong> with{' '}
              <strong>Express.js</strong>
            </>,
            <>
              Created database in <strong>MongoDB</strong>
            </>,
            <>
              Used <strong>Mongoose.js</strong> library as ODM
            </>,
            <>
              Used <strong>React.js</strong> on frontend
            </>,
            <>
              Styled UI with only <strong>CSS3</strong>
            </>,
            <>
              Managed client side state in <strong>Redux.js</strong>
            </>,
            <>
              Used <strong>Cloudinary</strong> as media storage
            </>,
            <>
              Authentication with <strong>Google OAuth 2.0</strong>
            </>,
            <>
              <strong>Responsive images</strong> to reduce bandwidth
            </>,
          ]}
          githubUrl="https://github.com/Shahzayb/freemage"
          websiteUrl="https://freemage.herokuapp.com/"
        />
        <ProjectCard
          title="Jif Chat"
          description="its a social networking website that allows you to send and receive gifs in real-time."
          imgSrc="/jif-chat.jpeg"
          features={[
            <>
              Created backend REST API with <strong>Express.js</strong>
            </>,
            <>
              Created database in <strong>MongoDB</strong>
            </>,
            <>
              Used <strong>Mongoose</strong> library
            </>,
            <>
              Used <strong>React.js</strong> on frontend
            </>,
            <>
              Used only <strong>CSS3</strong> for styling
            </>,
            <>
              Used <strong>video as a gif</strong> for high performace and to
              save bandwidth
            </>,
            <>
              Authentication with <strong>Google OAuth 2.0</strong>
            </>,
            <>
              Tracked real-time data changes with{' '}
              <strong>MongoDB Change Streams</strong>
            </>,
            <>
              Send real-time posts with <strong>Server Sent Events</strong>
            </>,
            <>
              Captured video with <strong>HTML5 MediaDevices API</strong>
            </>,
          ]}
          githubUrl="https://github.com/Shahzayb/jif-chat"
          websiteUrl="https://jifchat.herokuapp.com/"
        />
        <ProjectCard
          title="Text Chat"
          description="A real-time chat application made with socket.io"
          imgSrc="/chat-app.png"
          features={[
            <>
              Created backend REST API with <strong>Express.js</strong>
            </>,
            <>
              Created Web Socket server with <strong>Socket.io</strong>
            </>,
            <>
              Used <strong>AJAX</strong> on front-end
            </>,
            <>
              Created UI with <strong>CSS</strong>
            </>,
          ]}
          githubUrl="https://github.com/Shahzayb/chat-app"
          websiteUrl="https://shahzayb-chat-app.herokuapp.com/"
        />
      </div>
    </section>
  );
}

export default ProjectSection;
