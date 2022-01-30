import React from 'react';
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};
  
const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
  
const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setIsLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setIsLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <motion.div variants={itemMain} className="transition-image">
          <motion.img layoutId="main-image-1" src={process.env.PUBLIC_URL + `/images/works/webp/bouquet-in-focus.webp`} />
        </motion.div>
        <ImageBlock variants={item} id="bachelorette-party" />
        <ImageBlock variants={item} id="evening" />
        <ImageBlock variants={item} id="evening-over-the-farm" />
        <ImageBlock variants={item} id="pomegranate" />
      </motion.div>
    </motion.div>
    
  );
}

const Image = ({ src, fallback, type = "image/webp", alt }) => {
    return (
      <picture>
        <source srcSet={src} type={type} />
        <img src={fallback} alt={alt} />
      </picture>
    );
};

const ImageBlock = ({ posX, posY, variants, id }) => {
    return (
      <motion.div
        variants={variants}
        className={`image-block ${id}`}
        style={{
          top: `${posY}vh`,
          left: `${posX}vw `,
        }}
      >
        <Image
          src={process.env.PUBLIC_URL + `/images/works/webp/${id}.webp`}
          // fallback={process.env.PUBLIC_URL + `/images/works/${id}.jpg`}
          alt={id}
        />
      </motion.div>
    );
  };
  export default Loader;
