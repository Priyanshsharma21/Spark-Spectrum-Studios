import React from 'react';
import GridLine from './GridLine';
import { FaArrowRightLong } from "react-icons/fa6";
import { workDetails } from '../constants';
import { useNavigate } from 'react-router-dom';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useAnimeContext } from '../context/animeContext';

const ProjectTeaser = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const { setMessage } = useAnimeContext();

  const handleClick = () => {
    navigate("/work");
  }

  const handleMouseOver = (message) => {
    setMessage(message);
  }

  const handleMouseOut = () => {
    setMessage("Hi! How you doin'?");
  }

  const handleProjectRedirect = ()=>{
    navigate("/work/ukenko")
  }

  return (
    <div className='pt-main-box'>
      <GridLine />
      <div className="pt-hl-box group">
        <div className="pt-hl-line1 group-hover:pause animate-loopL">
          <h3 className="pt-hl">Featured Work&nbsp;</h3>
          <h3 className="pt-hl">Featured Work&nbsp;</h3>
          <h3 className="pt-hl">Featured Work&nbsp;</h3>
          <h3 className="pt-hl">Featured Work&nbsp;</h3>
          <h3 className="pt-hl">Featured Work&nbsp;</h3>
        </div>
        <div className="pt-hl-line2 group-hover:pause animate-loopL">
          <h3 className="pt-hl">Featured Work&nbsp;</h3>
          <h3 className="pt-hl">Featured Work&nbsp;</h3>
          <h3 className="pt-hl">Featured Work&nbsp;</h3>
          <h3 className="pt-hl">Featured Work&nbsp;</h3>
          <h3 className="pt-hl">Featured Work&nbsp;</h3>
        </div>
      </div>

      <div className="pt-main">
        <div className="pt-pic-container">
          <motion.div
            className="pt-pic-mask"
            onMouseOver={() => handleMouseOver("That's a crowd favorite!")}
            onMouseLeave={handleMouseOut}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 1 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            onClick={handleProjectRedirect}
          >
            <motion.img
              src={workDetails[0].teaser}
              alt={workDetails[0].title}
              className="pt-pic"
              whileInView={{ filter: "brightness(1)" }}
              initial={{ filter: "brightness(2)" }}
              transition={{ duration: 0.4, ease: 'linear' }}
            />
          </motion.div>
          <div className="pt-name-box">
            <span className="pt-name">
              {workDetails[0].title}<span className="pt-name-number">(01)</span>
            </span>
          </div>
        </div>
      </div>

      <div className="pt-link-work-box" onClick={handleClick}
        onMouseOver={() => handleMouseOver("Wanna see 'em all?")}
        onMouseLeave={handleMouseOut}
      >
        <div className="pt-arrow-box">
          <div className="arrow-container" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
            <div className="arrow-box flex justify-center items-center">
              <FaArrowRightLong className='i-arrow-right text-[#e2e2e2]' />
            </div>
          </div>
        </div>
        <span className="pt-link-process-text">
          Check out
          <br />
          all projects
        </span>
      </div>
    </div>
  );
}

export default ProjectTeaser;
