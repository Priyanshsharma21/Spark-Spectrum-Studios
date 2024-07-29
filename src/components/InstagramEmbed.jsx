import React from 'react';

const InstagramEmbed = ({ embedUrl }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: embedUrl }} />
  );
};

export default InstagramEmbed;