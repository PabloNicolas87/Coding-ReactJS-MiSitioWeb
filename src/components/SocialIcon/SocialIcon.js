import React from 'react';

const SocialIcon = ({ href, src, alt }) => {
  return (
      <a className="ms-3 text-muted" href={href} target="_blank" rel='noreferrer'>
        <img src={src} alt={alt} />
      </a>
  );
};

export default SocialIcon;
