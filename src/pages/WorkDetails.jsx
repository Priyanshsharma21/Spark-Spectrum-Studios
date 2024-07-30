import React, { useEffect, useState } from 'react'
import { workDetails } from '../constants';
import { useNavigate, useParams } from 'react-router-dom';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";
import { Footer } from '../components';

const WorkDetails = () => {
  const [workDetail, setWorkDetail] = useState(null)
  const [nextProjectID, setNextProjectID] = useState(null)
  const { id } = useParams()
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate()
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(()=>{
    const work = workDetails.find((work) => work.path === id)

    let workDetailId = Number(work?.id)
    if(workDetailId < workDetails.length){
      setNextProjectID(workDetails[workDetailId].path)
    }else{
      setNextProjectID("ukenko")
    }
    setWorkDetail(work)
  },[id])

  const handleNext = ()=>{
    navigate(`/work/${nextProjectID}`)
  }

  return (
    <div className="project-detail bg-[#121212]">
      <div className="pd-intro">
        <div className="pd-nav-box">
          <div className="pd-nav">
            <h3 className="pd-name text-[#e2e2e2]">{workDetail?.title}</h3>{" "}
            <div className="pd-entry-counter-box">
              <span className="pd-entry-counter-1">{/**/}{workDetail?.id}</span>{" "}
              <span className="pd-entry-counter-2 text-[#e2e2e2]">/ {/**/}{workDetails?.length}</span>
            </div>{" "}
            <div className="pd-link-next" onClick={handleNext}>
              <span className="pd-link-text text-[#e2e2e2] hover:text-[#b46633]">
                next <span className="pd-link-next-proj">project</span>
              </span>
            </div>
          </div>
        </div>{" "}
        <div className="pd-description-positioner">
          <p className="pd-description">
            {workDetail?.introDescription}
          </p>
        </div>
      </div>

      <motion.div style={{ y: yTransform }} className="pd-vid-positioner">
        <div className="pd-dark-side" />{" "}
        <video
          key={workDetail?.websiteTeaser}
          preload="preload"
          poster={workDetail?.teaser}
          muted
          playsInline
          loop
          autoPlay
          className="pd-showreel"
        >
            <source src={workDetail?.websiteTeaser} />
        </video>
      </motion.div>

      <div className="pd-subinfo-box">
        <div className="pd-awards-box">
          <h4 className="pd-awards-hl">Technology Used</h4>{" "}
          {workDetail?.techUsed.map((tech,i)=>(
            <div className="pd-award-mask" key={i}>
                <span
                  className="pd-award pd-award--0"
                  style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                >
                  {tech}
                </span>
            </div>
          ))}
         
          </div>{" "}

          <div className="pd-facts-box">
            <div className="pd-fact">
              <h4 className="pd-facts-hl">Client</h4>{" "}
              <span className="pd-facts">{workDetail?.clientName}</span>
            </div>{" "}
            <div className="pd-fact">
              <h4 className="pd-facts-hl">Launch Date</h4>{" "}
              <span className="pd-facts">{workDetail?.launchDate}</span>
            </div>
          </div>{" "}

          <div className="pd-services-box">
            <h4 className="pd-services-hl">Services</h4>{" "}
            {workDetail?.serviceProvided.map((service,i)=>(
              <div className={`pd-service pd-service--${i}`} key={i}>
              <motion.span
                  initial={{ y: 30 }}
                  animate={{ y: 0  }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                className="pd-service-name"
                style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
              >
                {service}
              </motion.span>{" "}
              <motion.div
                className="pd-service-line"
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1, ease: 'linear'}}
                style={{
                  transformOrigin: "left 50% 0px"
                }}
              />
            </div>
            ))}
          </div>{" "}

          <a
            href={workDetail?.websiteLink}
            target="_blank"
            rel="noopener"
            className="pd-launch"
          >
            <div className="pd-launch-btn">
              <div className="pd-launch-btn-arrow">
                <div className="arrow-container" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                  <div className="arrow-box flex justify-center items-center">
                    <FaArrowRightLong className='i-arrow-right text-[#e2e2e2]' />
                  </div>
                </div>
              </div>{" "}
              <span className="pd-launch-btn-text">Visit Website</span>
            </div>
          </a>
      </div>

      {workDetail?.websiteImages.map((workImg,i)=>(
        <div className={`detail-subentry pd-subentry pd-subentry--${i}`}>
          <img
              src={workImg}
              alt={workDetail?.title}
              className="dse-pic"
            />{" "}
            {/**/}
        </div>
      ))}

      <div className="pd-link-next-sub" onClick={handleNext}>
        <span className="pd-link-text-sub">next project</span>
      </div>

      <Footer />

    </div>
  )
}

export default WorkDetails