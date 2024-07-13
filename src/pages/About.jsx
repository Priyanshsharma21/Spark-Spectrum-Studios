import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { aboutSection } from '../constants';
import { AboutBigPara } from '../components'


const About = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [paragraphs, setParagraphs] = useState([aboutSection[0].para]);


  useEffect(() => {
    const staggerBoxes = document.querySelectorAll('.stagger-box');
    gsap.fromTo(
      staggerBoxes,
      { opacity: 0.2 },
      {
        opacity: 1,
        duration: currentStep === 0 ? 0.5 : currentStep === 1 ? 0.5 : 0.09,
        delay: currentStep === 0 ? 3 : 0,
        ease: 'none',
        stagger: {
          amount: currentStep === 2 ? 15 : 3,
          ease: 'none',
        },
        onComplete: () => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        },
      }
    );
  }, [paragraphs]);

  const handleClick = (answer) => {
    if (currentStep === 0) {
      const nextPara = aboutSection[1][`para${answer}`];
      setParagraphs([nextPara]);
    } else if (currentStep === 1) {
      const nextParas = aboutSection[2].paras;
      setParagraphs(nextParas);
    }
    setCurrentStep((prev) => prev + 1);
  };

  
  return (
    <div className="about bg-[#161616]">
      <div className="about-text about-first">
        <>
          {currentStep === 2 ? (
            <AboutBigPara paragraphs={paragraphs}/>
          ):(
            <>
            {paragraphs.map((para, index) => (
              <>
              <span className="firstline" key={index}>
                  {para.split("").map((item, i) => (
                    <span
                      key={i}
                      className="about-text-l stagger-box about-part1 lq1-M0 text-[#e2e2e2]"
                      style={{ opacity: 0.2 }}
                    >
                      {item}
                    </span>
                  ))}
                </span>
                {currentStep === 2 ? (
                  <> <br />
                  <br /> </>
                ):(
                  <></>
                )}
                </>
              ))}
            </>
          )}
        </>
         <>
            {currentStep !== 2 && (
              <span className="yesorno cursor-pointer">
                {" "}
                <span
                  className="about-text-l stagger-box yes answer answer1Y about-part1"
                  style={{ opacity: 0.2 }}
                  onClick={() => handleClick('Yes')}
                >
                Yes!
                </span>{" "}
                <span
                  className="about-text-l stagger-box text-white answer slash about-part1"
                  style={{ opacity: 0.2 }}
                >
                  {" "}
                  /{" "}
                </span>{" "}
                <span
                  className="about-text-l stagger-box no answer answer1N about-part1"
                  style={{ opacity: 0.2 }}
                  onClick={() => handleClick('No')}
                >
                  No.
                </span>
            </span>
            )}
         </>         
      </div>
    </div>
  );
};

export default About;
