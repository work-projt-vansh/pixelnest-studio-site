import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './FinalCTA.css';

const FinalCTA = () => {
  const whatsappNumber = '918791734170';
  const message = encodeURIComponent("Hi PixelNest! I'm interested in discussing a project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="section final-cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to grow your business online?</h2>
          <p className="cta-subtitle">Let’s build something amazing together.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Project
            </Link>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-large"
            >
              <FaWhatsapp /> WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;