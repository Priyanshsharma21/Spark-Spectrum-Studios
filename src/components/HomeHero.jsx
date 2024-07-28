import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa6';
import { IoIosPlay } from "react-icons/io";
import { Button, Modal } from 'antd';
import { useAnimeContext } from '../context/animeContext';
import { FaArrowDownLong } from "react-icons/fa6";


const HomeHero = () => {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const { setMessage } = useAnimeContext();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const spans1 = ['buy', 'dig', 'live'];
  const spans2 = ['stuff.', 'brand.', 'story.'];
  const spans3 = ["websites.", "videos.", "reels."];

  useEffect(() => {
    const interval1 = setInterval(() => {
      setActiveIndex1((prevIndex) => (prevIndex + 1) % spans1.length);
    }, 2000);

    const interval2 = setInterval(() => {
      setActiveIndex2((prevIndex) => (prevIndex + 1) % spans2.length);
    }, 2000);

    const interval3 = setInterval(() => {
      setActiveIndex3((prevIndex) => (prevIndex + 1) % spans3.length);
    }, 2000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [spans1.length, spans2.length, spans3.length]);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const updateTimer = () => {
        const currentTime = video.currentTime;
        const duration = video.duration;
        const remainingTime = duration - currentTime;

        const secs = Math.floor(remainingTime);
        const millis = Math.floor((remainingTime - secs) * 100);

        setSeconds(secs);
        setMilliseconds(millis);

        if (remainingTime <= 0) {
          video.currentTime = 0;
          video.play();
        }
      };

      video.addEventListener('timeupdate', updateTimer);

      return () => {
        video.removeEventListener('timeupdate', updateTimer);
      };
    }
  }, [videoRef]);

  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const handleCancel = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setIsModalOpen(false);
  };

  const handleMouseOver = () => {
    setMessage("Definitely worth watching!");
  };

  const handleMouseOut = () => {
    setMessage("Hi! How you doin'?");
  };

  return (
    <div className="h-container w-screen overflow-hidden pb-[3rem]">
      <div className="h-main-text-slider">
        <motion.h2 className="h-main-text">
          {"We make"}
          <br />
          {"people "}
          {spans1.map((text, index) => (
            <span key={index} style={{ display: activeIndex1 === index ? 'inline-block' : 'none' }}>
              {text}
            </span>
          ))}
          <br />
          {"your "}
          {spans2.map((text, index) => (
            <span key={index} style={{ display: activeIndex2 === index ? 'inline-block' : 'none' }}>
              {text}
            </span>
          ))}
          <br />
          {"we make"}
          <br />
          {spans3.map((text, index) => (
            <span key={index} style={{ display: activeIndex3 === index ? 'inline-block' : 'none' }}>
              {text}
            </span>
          ))}
        </motion.h2>
      </div>

      <div className="h-showreel-container">
        <div className="h-showreel-box">
          <motion.div className="h-showreel-slider" style={{ y: yTransform }}>
            <div className="h-showreel-scaler">
              <video
                ref={videoRef}
                onClick={showModal}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
                preload="preload"
                poster="https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&w=600"
                muted
                playsInline
                loop
                autoPlay
                className="h-showreel cursor-pointer"
              >
                <source src="https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4" />
              </video>
            </div>
          </motion.div>

          <Modal width="100%" className='' open={isModalOpen} onCancel={handleCancel}>
            <div className="h-showreel-video-main">
              <video
                ref={modalVideoRef}
                preload="preload"
                poster="https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&w=600"
                controls
                playsInline
                loop
                autoPlay
                className="h-showreel"
              >
                <source src="https://cdn.sanity.io/files/mdo42gqc/production/276c5f2af07a2017cfb99bdf5114f88e924e3888.mp4" />
              </video>
            </div>
          </Modal>

          <div className="h-showreel-nav">
            <motion.div className="h-showreel-time" style={{ y: yTransform }}>
              <div className="h-showreel-time-slider">
                <span className="h-showreel-time-1 text-[#e2e2e2]">{String(seconds).padStart(2, '0')}:</span>
                <span className="h-showreel-time-2 text-[#e2e2e2]">{String(milliseconds).padStart(2, '0')}</span>
              </div>
            </motion.div>

            <div className="h-showreel-time-m">
              <div className="h-showreel-time-slider-m">
                <span className="h-showreel-time-1-m text-[#e2e2e2]">{String(seconds).padStart(2, '0')}:</span>
                <span className="h-showreel-time-2-m text-[#e2e2e2]">{String(milliseconds).padStart(2, '0')}</span>
              </div>
            </div>

            <div className="h-showreel-btn-slider">
              <motion.button className="h-showreel-btn" style={{ y: yTransform }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
              >
                <div onClick={showModal} className="h-play-icon-circle flex justify-center items-center">
                  <IoIosPlay className='text-xl text-white' />
                </div>
                <span onClick={showModal} className="h-showreel-btn-text">
                  play
                  <br />
                  <span className="h-showreel-btn-text2">
                    showreel
                  </span>
                </span>
              </motion.button>
            </div>

            <div className="h-showreel-btn-slider-mobile">
              <button onClick={showModal} className="h-showreel-btn-m">
                <div className="h-play-icon-circle-m flex justify-center items-center">
                  <IoIosPlay className='text-xl text-white' />
                </div>

                <span className="h-showreel-btn-text-m">play<br />
                  <span className="h-showreel-btn-text2">showreel</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-arrow-positioner">
        <motion.div
          className="h-arrow-container"
          style={{ opacity: arrowOpacity }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img src="https://cdn.sanity.io/images/s9olv7lh/production/be77e220a3396ca9e42d0fc6e7a05796ba920f82-62x121.png" alt="arrow" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
