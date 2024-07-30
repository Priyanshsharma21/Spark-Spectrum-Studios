import React, { useState } from 'react'
import { useEffect } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { GiChainedArrowHeads } from "react-icons/gi";

const AboutBigPara = ({paragraphs}) => {
    const [currentPara, setCurrentPara] =useState(0)
    const navigate = useNavigate()

    const handleRedirect = ()=>{
        navigate("/contact")
      }
    useEffect(() => {
        const staggerBoxes = document.querySelectorAll('.stagger-box');
        gsap.fromTo(
          staggerBoxes,
          { opacity: 0.2 },
          {
            opacity: 1,
            duration: 0.09,
            delay: 0,
            ease: 'none',
            stagger: {
              amount: 15,
              ease: 'none',
            },
            onComplete: () => {
              window.scrollTo({
                top: window.scrollTo(0, 0),
                behavior: 'smooth',
              });
            },
          }
        );
      }, [currentPara]);

      const handleNext = ()=>{
        if(currentPara < paragraphs.length)
            setCurrentPara(prev=>prev+1)
        }
  return (
    <div className="about text-[#121212]">
         <div className="">
            <span className="firstline">
                  {paragraphs[currentPara].split("").map((item, i) => (
                    <span
                      key={i}
                      className="about-text-l stagger-box about-part1 lq1-M0 text-[#e2e2e2]"
                      style={{ opacity: 0.2 }}
                    >
                      {item}
                    </span>
                  ))}
                  <br />
            </span>

            {currentPara === 5 ? (
                <span className="yesorno cursor-pointer">
                        {" "}
                        <span
                            className="about-text-l stagger-box answer answer1Y about-part1 you_like_that"
                            style={{ opacity: 0.2 }}
                            onClick={() => handleClick('Yes')}
                        >
                            You like that?
                            {" "}
                        </span>{" "}
                            <span
                            className="about-text-l stagger-box like answer answer1N about-part1"
                            style={{ opacity: 0.2 }}
                            onClick={handleRedirect}
                        >
                            I LOVE IT!
                        </span>
                        <div className="ov-hl-spacer"></div>
                </span>
            ):(
                <span className="yesorno cursor-pointer">
                {" "}
                    <div
                        className="about-text-l flex stagger-box like answer answer1N about-part1"
                        style={{ opacity: 0.2 }}
                        onClick={handleNext}
                    >
                        <div className={currentPara == 0 ? "ml-0" : "next-watch"}>Next</div>
                        <GiChainedArrowHeads className="next-arrow-main ml-2"/>
                    </div>
                    <div className="ov-hl-spacer"></div>
                </span>
            )}

            
            </div>
    </div>
  )
}

export default AboutBigPara