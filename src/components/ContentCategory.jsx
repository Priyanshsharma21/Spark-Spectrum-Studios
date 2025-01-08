import { contentCategoryData } from '../constants';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContentCategory = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    const handleHovered = (index) => {
        setHoveredIndex(index);
    };

    const handleHoveredOut = () => {
        setHoveredIndex(null);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            },
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div 
            className="contentCategory w-full h-screen"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h1 className="ccTitle">Select a Category.</h1>
            <Row gutter={[16, 16]} className="ccRow">
                {contentCategoryData.map((item, i) => (
                    
                        <Col 
                            xl={6} lg={6} md={12} sm={24} xs={24} 
                        >
                        <motion.div 
                        key={i} 
                        variants={cardVariants} 
                        className="ccCol w-full"
                    >
<div 
                                className="ccImg" 
                                onMouseEnter={() => handleHovered(i)}
                                onMouseLeave={handleHoveredOut}
                                onClick={() => navigate(`/content/${item.path}`)}
                            >
                                {hoveredIndex === i ? (
                                    <video 
                                        src={item.videoSrc} 
                                        autoPlay 
                                        loop 
                                        muted 
                                        className="ccVideo cursor-pointer"
                                    />
                                ) : (
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="ccImage cursor-pointer" 
                                    />
                                )}
                            </div>
                            <div className="cctitle">
                                {item.title}
                            </div>
                    </motion.div>
                            
                        </Col>
                ))}
            </Row>
        </motion.div>
    );
};

export default ContentCategory;
