import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const SocialMediaButtons = () => {
  return (
    <div className='float-social'>
      <a href='https://www.facebook.com/ikigaicrm/' target='_blank' rel='noopener noreferrer'>
        <FaFacebookSquare />
      </a>
      <a href='https://www.instagram.com/ikigaicrm/' target='_blank' rel='noopener noreferrer'>
        <FaInstagramSquare />
      </a>
      <a href='https://www.linkedin.com/showcase/ikigaicrm/' target='_blank' rel='noopener noreferrer'>
        <FaLinkedin />
      </a>
      <a href='https://twitter.com/ikigaicrm' target='_blank' rel='noopener noreferrer'>
        <FaTwitterSquare />
      </a>
    </div>
  );
};

export default SocialMediaButtons;
