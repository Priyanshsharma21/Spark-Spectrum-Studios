import { useScroll, useTransform, motion } from 'framer-motion'
import React from 'react'
import { Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { contentCards } from '../constants'
import { ContentAbout, ContentCategory, ContentProcess, FaqMain, Footer } from '../components'


const Content = () => {
  const navigate = useNavigate()
 
  const handleClick = (path)=>{
    navigate(`/content/${path}`)
  }

  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -0]);


  return (
    <div className="content bg-[#161616]">
      <ContentCategory />
        {/* <section className="c-sec-1">
          <motion.div className="i-big-text-box"
            whileInView={{y:[100,50,0]}}
            transition={{duration:0.5}}
          >
              <motion.p className="i-big-text-mask"
              style={{ y: yTransform }}
              >
                  <span className="i-big-text">More than <span className="text-[#00FFD1]">visuals</span></span>
              </motion.p>
              <motion.p className="i-big-text-mask"
              style={{ y: yTransform }}
              >
                  <span className="i-big-text">
                  {"It's a "}
                  <span className="text-[#FF00D6]">story</span>
                  <span>
                    <img src="https://cdn.sanity.io/images/s9olv7lh/production/6eda5725253a350b35422cee9aa63830641b0cbd-512x512.png" className="c-star" alt="stars" />
                  </span>
                   {" told."}
                  </span>
              </motion.p>
          </motion.div>
        </section> */}


        {/* <section className="c-sec-2">
          <Row gutter={[16,16]} className='p-5 c-row'>
            {contentCards.map((content,i)=>(
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <div className="c-client-img-box rounded-xl cursor-pointer" onClick={()=>handleClick(content.path)}>
                  <img src={content.src} alt={content.path} className='w-full c-client-img h-full object-cover rounded-xl'/>
                </div>
              </Col>
            ))}
          </Row>
        </section> */}

        <section className="c-about-main">
          <ContentAbout />
        </section>

        <section className="c-process">
          <ContentProcess />
        </section>

        <section className="c-faq">
          <FaqMain />
        </section>

        <section className="c-footer">
          <Footer />
        </section>
    </div>
  )
}

export default Content