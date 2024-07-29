import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { about1,
  about2,
  about3,
  about4,
  about5,
  about6,
  about7} from '../assets/index'
  import { useScroll, useTransform, motion} from 'framer-motion';

gsap.registerPlugin(ScrollTrigger)

const ContentAbout = () => {
  const aboutRef = useRef(null)
  const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);


  const pictures = [
    {
        src: about1,
        scale: scale4
    },
    {
        src: about3,
        scale: scale5
    },
    {
        src: about2,
        scale: scale6
    },
    {
        src: about4,
        scale: scale5
    },
    {
        src: about5,
        scale: scale6
    },
    {
        src: about6,
        scale: scale8
    },
    {
        src: about7,
        scale: scale9
    }
]

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 50%",
        end: "bottom 10%",
        scrub: true,
        pinSpacing: false,
      }
    })
  }, [])

  return (
    <div id="about" ref={aboutRef} className="w-full min-h-[100vh] bg-[#161616] text-white">
      <div ref={container} className="about_container">
              <div className="about_sticky">
                  {
                      pictures.map( ({src, scale}, index) => {
                          return <motion.div key={index} style={{scale}} className="about_el">
                              <div className="about_imageContainer">
                                  <img
                                      src={src}
                                      alt="image"
                                  />
                              </div>
                          </motion.div>
                      })
                  }
              </div>
          </div>
    </div>
  )
}

export default ContentAbout