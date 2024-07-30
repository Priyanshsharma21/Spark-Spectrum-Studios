import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { motion, useTransform, useScroll } from "framer-motion";
import { processData } from '../constants';

gsap.registerPlugin(ScrollTrigger)

const ContentProcess = () => {
    const processRef = useRef(null)
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: processRef.current,
        start: "top 50%",
        end: "bottom 100%",
        scrub: true,
        pinSpacing: false,
      }
    })
  }, [])


  return (
    <div id="process" ref={processRef} className="w-full min-h-[100vh] bg-[#141414] text-white">
    <section ref={targetRef} className="relative h-[300vh] scrolling_box bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden processbg">
        <motion.div style={{ x }} className="flex gap-4 c-process-cont">
          {processData.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
    </div>
  )
}

const Card = ({ card }) => {
  
  return (
    <div
      key={card.srno}
      className="group ml-[2rem] rounded-xl relative processCardMain overflow-hidden bg-[#E04E36]"
    >
      <div className="c-card-content-main">
      <div className="processCardImg flex justify-center mt-5">
          <img src={card.src} alt={card.title} className="processCard_img"/>
      </div>

      <div className="processCardDetails mt-1">
        <div className="flex items-center">
          <div className="processSrno bg-black text-white flex justify-center items-center rounded-full">
            {card.srno}
          </div>
          <div className="processTitle">
            {card.title}
          </div>
        </div>
        <div className="processDescription font-medium">
          {card.description}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContentProcess