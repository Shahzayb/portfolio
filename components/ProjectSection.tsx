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
            'Created backend API with Express.js',
            'Wrote unit test for the whole API',
            'Created database in MongoDB',
            'Used React.js on frontend',
            'Created UI with MaterialUI',
            'Managed client side state in React-Query',
            'Used Cloudinary as media storage',
            'Authentication with Google OAuth 2.0',
            'Responsive images to reduce bandwidth',
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
            'Created backend API with Express.js',
            'Created database in MongoDB & used Mongoose.js library',
            'Used React.js on frontend',
            'Styled UI with only CSS',
            'Managed client side state in Redux.js',
            'Used Cloudinary as media storage',
            'Authentication with Google OAuth 2.0',
            'Responsive images to reduce bandwidth',
          ]}
          githubUrl="https://github.com/Shahzayb/freemage"
          websiteUrl="https://freemage.herokuapp.com/"
        />
        <ProjectCard
          title="Jif Chat"
          description="its a social networking website that allows you to send and receive gifs in real-time."
          imgSrc="/jif-chat.jpeg"
          features={[
            'Created backend API with Express.js',
            'Created database in MongoDB',
            'Used Mongoose library',
            'Used React.js on frontend',
            'Used only CSS for styling',
            'Used video as a gif for high performace & to save bandwidth',
            'Authentication with Google OAuth 2.0',
            'Tracked real-time data changes with MongoDB Change Streams',
            'Send real-time posts with Server Sent Events',
            'Captured video with HTML5 MediaDevices API',
          ]}
          githubUrl="https://github.com/Shahzayb/jif-chat"
          websiteUrl="https://jifchat.herokuapp.com/"
        />
        <ProjectCard
          title="Text Chat"
          description="A real-time chat application made with socket.io"
          imgSrc="/chat-app.png"
          features={[
            'Created backend API with Express.js',
            'Created Web Socket server with Socket.io',
            'Used AJAX on front-end',
            'Created UI with CSS',
          ]}
          githubUrl="https://github.com/Shahzayb/chat-app"
          websiteUrl="https://shahzayb-chat-app.herokuapp.com/"
        />
      </div>
    </section>
  );
}

export default ProjectSection;
