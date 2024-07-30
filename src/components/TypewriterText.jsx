import React from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text }) => {
  const characters = text.split('');

  const variants = {
    hidden: { opacity: 0.8 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05, 
        duration: 0.5,
        ease: 'linear'
      }
    })
  };

  return (
    <div className="typewriter-text">
      {characters.map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="typewriter-char text-[#e2e2e2]"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TypewriterText;