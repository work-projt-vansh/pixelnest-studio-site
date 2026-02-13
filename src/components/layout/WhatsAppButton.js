import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappNumber = '918791734170';
  const message = encodeURIComponent("Hi PixelNest! I'm interested in discussing a project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      {isHovered && <span className="whatsapp-text">Chat with us</span>}
      <span className="whatsapp-pulse"></span>
    </a>
  );
};

export default WhatsAppButton;