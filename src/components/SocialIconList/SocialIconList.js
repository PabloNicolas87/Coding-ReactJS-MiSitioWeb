import React from 'react';
import SocialIcon from '../SocialIcon/SocialIcon';
import './SocialIconList.css';

const SocialIconList = () => {

  const socialMediaLinks = [
    {
      href: "https://api.whatsapp.com/send?phone=5547996251091&text=Hola%20Pablo!%20Quisiera%20contactarme%20contigo!",
      src: "/images/whatsapp.webp",
      alt: "Whatsapp",
    },
    {
      href: "https://www.linkedin.com/in/pablogirone",
      src: "/images/linkedin.webp",
      alt: "Linkedin",
    },
    {
      href: "https://www.instagram.com/pgirone/",
      src: "/images/instagram.webp",
      alt: "Instagram",
    },
    {
      href: "https://www.facebook.com/pablo.girone.1",
      src: "/images/facebook.webp",
      alt: "Facebook",
    },
    {
      href: "https://github.com/PabloNicolas87",
      src: "/images/github.webp",
      alt: "GitHub",
    },
  ];

  return (
    <div className="py-5">
      <div className="redes">
        <ul className="nav redes col-12 justify-content-center list-unstyled d-flex">
          {socialMediaLinks.map((socialMedia, index) => (
            <SocialIcon key={index} {...socialMedia} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialIconList;
