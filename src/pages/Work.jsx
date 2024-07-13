import React, { useState } from 'react';
import { workDetails } from '../constants';
import { RunningRaster } from '../components';
import { motion } from 'framer-motion'
import { useAnimeContext } from '../context/animeContext';
import { useNavigate } from 'react-router-dom';


const Service = () => {
  const [showRunner, setShowRunner] = useState(true);
  const [hoveredWorkId, setHoveredWorkId] = useState(null);
  const { setMessage } = useAnimeContext()
  const navigate = useNavigate()

  const handleMouseEnter = (id) => {
    setHoveredWorkId(id);
    workDetails.forEach((item)=>{
      if(item.id === id){
        setMessage(item.message);
      } 
    })
    setShowRunner(false)
  };

  const handleMouseLeave = () => {
    setHoveredWorkId(null);
    setShowRunner(true)
  };

  const handleRedirect = (path)=>{
    navigate(`/work/${path}`)
  }

  return (
    <section className="overview bg-[#161616]">
      {showRunner && <RunningRaster />}

      {showRunner && (
        <div className="ov-hl-box">
        <div className="ov-hl-mask">
          <span className="ov-hl" >
            Selec<span className="ov-hl-hyphen">-</span>
          </span>
        </div>
        <div className="ov-hl-mask">
          <span className="ov-hl">
            ted
          </span>
        </div>
        <div className="ov-hl-mask">
          <span className="ov-hl ov-work">
            Works
          </span>
        </div>
      </div>
      )}

      <div className="ov-hl-spacer"></div>

      {workDetails.map((work, i) => (
        <div
          key={work.id}
          className={`overview-entry ov-entry--${work.id}`}
          onMouseEnter={() => handleMouseEnter(work.id)}
          onMouseLeave={handleMouseLeave}
          onClick={()=>handleRedirect(work.path)}
        >
          <div className="ove-fixed">
            <div className="ove-positioner">
              <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: hoveredWorkId === work.id ? 0 : 20 }}
                  transition={{ duration: 0.3, ease: 'linear' }}
                className="ove-mask"
                style={{opacity: hoveredWorkId === work.id ? 1 : 0}}
              >
                <motion.img src={work.teaser} alt={work.title} className="ove-img object-cover"
                 initial={{ filter: "brightness(2)" }}
                  animate={{ filter: hoveredWorkId === work.id ? "brightness(1)" : "brightness(2)"}}
                  transition={{ duration: 0.5, ease: 'linear' }}
                />
                <div className="ove-darkener" />
              </motion.div>
            </div>
            <div className="ove-info-positioner">
              <motion.div className="ove-info"
                  initial={{ y: 20 }}
                  animate={{ y: hoveredWorkId === work.id ? 0 : 20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <motion.div
                  initial={{ y: 30 }}
                  animate={{ y: hoveredWorkId === work.id ? 0 : 30 }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                  className="ove-counter-box"
                  style={{
                    opacity: hoveredWorkId === work.id ? 1 : 0,
                  }}
                >
                  <span className="ove-counter-1">{work.id}</span>
                  <span className="ove-counter-2 text-[#e2e2e2]"> / {workDetails.length}</span>
                </motion.div>
                <motion.p
                  initial={{ y: 20 }}
                  animate={{ y: hoveredWorkId === work.id ? 0 : 20 }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                  className="ove-description"
                  style={{
                    opacity: hoveredWorkId === work.id ? 1 : 0,
                    transform: hoveredWorkId === work.id ? "matrix(1, 0, 0, 1, 0, 0)" : "matrix(1, 0, 0, 1, 0, -103.36)",
                  }}
                >
                  {work.introDescription}
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div className="ove-scroll">
            <div className="ove-name-container">
              <div className="ove-name-mask">
                <span className="ove-name-windsor">{work.title}</span>
                <span className="ove-name">{work.title}</span>
                <span className="ove-counter-name">{work.sr}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="ov-hl-spacer"></div>

    </section>
  );
};

export default Service;
