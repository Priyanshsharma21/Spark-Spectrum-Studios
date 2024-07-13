import { motion } from 'framer-motion';
import React from 'react';

const GridLine = ({ type, count }) => {
  
  return (
    <>
        <motion.div className="pt-hl-raster-h"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        >

        
  <motion.div className="pt-hl-raster-v"
    whileInView={{ y: 0, opacity: 1 }}
    initial={{ y: 20, opacity: 0 }}
    transition={{ duration: 0.5, ease: 'linear', delay: 0.05 }}
  >
   {Array.from({length : 44}, (_, i)=>(
    <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: 'linear', delay: 0.005 * i }}
        className="pt-raster-line-v"
        style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
    />
   ))}
  </motion.div>
  
{Array.from({length : 12}, (_, i)=>(
    <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1, ease: 'linear', delay: 0.005 * i }}
        className="pt-raster-line-h"
    />
))}
 
</motion.div>
    </>
  )
};

export default GridLine;











