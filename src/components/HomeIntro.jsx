import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useAnimeContext } from '../context/animeContext';

const HomeIntro = () => {
    const navigate = useNavigate()
    const { setMessage } = useAnimeContext()
    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
      });
    const { scrollYProgress } = useScroll();
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2Transform = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const handleAboutUs = ()=>{
        navigate("/about")
    }

    const handleMouseOver = (message)=>{
        setMessage(message)
      }
    
      const handleMouseOut = ()=>{
        setMessage("Hi! How you doin'?")
      }
    

  return (
    <div ref={ref}>
        <motion.div className="i-big-text-box"
        whileInView={{y:[100,50,0]}}
        transition={{duration:0.5}}
        >
            <motion.p className="i-big-text-mask"
             style={{ y: yTransform }}
            >
                <span className="i-big-text">No over-strategizing</span>
            </motion.p>
            <motion.p className="i-big-text-mask"
            style={{ y: yTransform }}
            >
                <span className="i-big-text">No bloating</span>
            </motion.p>
            <motion.p className="i-big-text-mask"
            style={{ y: yTransform }}
            >
                <span className="i-big-text">
                    <span className="yellow">No fuss</span>
                </span>
            </motion.p>
        </motion.div>

        <motion.div className="i-main-headline-trigger matrixno"
        whileInView={{y:[100,50,0], opacity:[0,0,1], filter: ["blur(10px)", "blur(0px)"]}}
        transition={{duration:0.5}}
        >
            <h1
                onMouseOver={()=>handleMouseOver("Already convinced?")}
                onMouseLeave={handleMouseOut}
                className="i-main-headline"
            >
                Spark Studios creates highly functional, unique &amp; award-winning digital
                products in the{" "}
                <span className="fat">most uncomplicated way</span> possible.
            </h1>
        </motion.div>

        <div className="i-link-process-box"
        onMouseOver={()=>handleMouseOver("Learn all our secrets here.")}
        onMouseLeave={handleMouseOut}
        >
            <div className="i-arrow-box" onClick={handleAboutUs}>
                <div
                className="arrow-container"
                style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                >
                <div className="arrow-box flex justify-center items-center">
                    <FaArrowRightLong className='i-arrow-right text-[#e2e2e2]'/>
                </div>
                </div>
            </div>{" "}
            <span className="i-link-process-text" onClick={handleAboutUs}>
                Learn more
                <br />
                about us
            </span>
        </div>

    </div>
  )
}

export default HomeIntro