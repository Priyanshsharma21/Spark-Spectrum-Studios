import React, { useEffect, useState } from 'react';
import { contentCards } from '../constants';
import { useNavigate, useParams } from 'react-router-dom';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Row, Col } from 'antd';
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';

const ContentDetail = () => {
  const [contentDetail, setContentDetail] = useState(null);
  const [nextContentID, setNextContentID] = useState(null);
  const { id } = useParams();
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const content = contentCards.find((content) => content.path === id);
    let contentDetailId = content?.id;
    if (contentDetailId < contentCards.length) {
      setNextContentID(contentCards[contentDetailId].path);
    } else {
      setNextContentID("orxa");
    }
    setContentDetail(content);
  }, [id]);

  const handleNext = () => {
    navigate(`/content/${nextContentID}`);
  };

  const handleRedirect = (link) => {
    window.open(link, "_blank");
  };

  const renderReels = () => {
    return contentDetail?.reels?.map((reel, index) => (
      <Col xs={24} sm={24} md={12} lg={8} xl={8} key={index}>
        <div className="reel-container" onClick={() => handleRedirect(reel)}>
          <InstagramEmbed url={reel} width="100%" height="100%" />
        </div>
      </Col>
    ));
  };

  const renderVideos = () => {
    return contentDetail?.videos?.map((video, index) => (
      <div className="video-container mt-10" key={index}>
        <YouTubeEmbed url={video} width="100%" height="600px" />
      </div>
    ));
  };

  const renderPosts = () => {
    return contentDetail?.posts?.map((post, index) => (
      <Col xs={24} sm={24} md={12} lg={8} xl={8} key={index} onClick={() => handleRedirect(post.link)}>
        <div className="post-container">
          <img src={post.src} alt="" className='w-full h-full object-cover rounded-xl' />
        </div>
      </Col>
    ));
  };

  const renderShorts = () => {
    return contentDetail?.shorts?.map((short, index) => (
      <Col xs={24} sm={24} md={12} lg={8} xl={8} key={index}>
        <div className="short-container">
          <YouTubeEmbed url={short} width="100%" height={400} />
        </div>
      </Col>
    ));
  };

  const renderHeading = (heading) => {
    return (
      <div className="relative bg-[#161616] pb-24 mt-14">
        <div className={`cd-heading pt-hl-box group ${heading.toLowerCase()}`}>
          <div className="pt-hl-line1 group-hover:pause animate-loopL">
            <h3 className="pt-hl text-[#e2e2e2] cd-head-continue">{heading}&nbsp;</h3>
            <h3 className="pt-hl text-[#e2e2e2] cd-head-continue">{heading}&nbsp;</h3>
            <h3 className="pt-hl text-[#e2e2e2] cd-head-continue">{heading}&nbsp;</h3>
          </div>
          <div className="pt-hl-line2 group-hover:pause animate-loopL">
            <h3 className="pt-hl text-[#e2e2e2] cd-head-continue">{heading}&nbsp;</h3>
            <h3 className="pt-hl text-[#e2e2e2] cd-head-continue">{heading}&nbsp;</h3>
            <h3 className="pt-hl text-[#e2e2e2] cd-head-continue">{heading}&nbsp;</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="project-detail bg-[#161616]">
      <div className="pd-intro pt-10">
        <div className="pd-nav-box">
          <div className="pd-nav">
            <h3 className="pd-name text-[#e2e2e2]">{contentDetail?.client_name}</h3>
            <div className="pd-entry-counter-box">
              <span className="pd-entry-counter-1">{contentDetail?.id}</span>
              <span className="pd-entry-counter-2 text-[#e2e2e2]">/ {contentCards?.length}</span>
            </div>
            <div className="pd-link-next" onClick={handleNext}>
              <span className="pd-link-text text-[#e2e2e2] hover:text-[#b46633]">
                next <span className="pd-link-next-proj">client</span>
              </span>
            </div>
          </div>
        </div>
        <div className="pd-description-positioner">
          <p className="pd-description">
            {contentDetail?.introDescription}
          </p>
        </div>
      </div>

      <motion.div style={{ y: yTransform }} className="pd-vid-positioner">
        <div className="pd-dark-side" />
        <div className="c-img-block">
          <img className="pd-showreel w-full h-full object-cover" src={contentDetail?.cover} alt={contentDetail?.client_name} />
        </div>
      </motion.div>

      <div className="pd-subinfo-box c-subinfo-box">
        <div className="pd-awards-box">
          <h4 className="pd-awards-hl">Software Used</h4>
          {contentDetail?.softwareUsed.map((eng, i) => (
            <div className="pd-award-mask flex justify-between" key={i}>
              <span className="pd-award pd-award--0">
                {eng}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="c-egn pt-20">
        <h4 className="pd-services-hl flex justify-center">Engagement</h4>
        {contentDetail?.engagementDetails.map((eng, i) => (
          <div className={`pd-service pd-service--${i}`} key={i}>
            <div className="flex justify-between">
              <motion.span
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'linear' }}
                className="pd-service-name"
              >
                {eng.title}
              </motion.span>
              <motion.span
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'linear' }}
                className="pd-service-name"
              >
                {eng.value}
              </motion.span>
            </div>
            <motion.div
              className="pd-service-line"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 1, ease: 'linear' }}
              style={{
                transformOrigin: "left 50% 0px"
              }}
            />
          </div>
        ))}
      </div>

      <div className="content-section">
      {contentDetail?.posts && (
          <>
            {renderHeading("Posts")}
            <Row gutter={[16, 16]} className='cd-row-main c-row'>
            {renderPosts()}
            </Row>
          </>
        )}
        
        {contentDetail?.reels && (
          <>
            {renderHeading("Reels")}
            <Row gutter={[16, 16]} className='cd-row-main c-row'>
              {renderReels()}
            </Row>
          </>
        )}
        {contentDetail?.videos && (
          <>
            {renderHeading("Videos")}
            <div className='cd-row-main'>
              {renderVideos()}
            </div>
          </>
        )}
       
        {contentDetail?.shorts && (
          <>
            {renderHeading("Shorts")}
            <Row gutter={[16, 16]} className='cd-row-main c-row'>
              {renderShorts()}
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentDetail;
