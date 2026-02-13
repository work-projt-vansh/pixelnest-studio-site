import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#4F46E5', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#7C3AED', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <path d="M100 20L170 60V140L100 180L30 140V60L100 20Z" 
                      stroke="url(#footerLogoGradient)" 
                      strokeWidth="4" 
                      fill="none"/>
                <path d="M85 80H105C115 80 122 87 122 97C122 107 115 114 105 114H95V130H85V80Z" 
                      fill="url(#footerLogoGradient)"/>
              </svg>
              <span className="footer-logo-text">PixelNest</span>
            </div>
            <p className="footer-description">
              Transforming ideas into beautiful digital experiences. Your trusted partner for UI/UX design, web development, and branding.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/services">Website Development</Link></li>
              <li><Link to="/services">Branding & Logo Design</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <ul className="footer-contact">
              <li>
                <FaPhone />
                <a href="tel:+918791734170">+91 8791734170</a>
              </li>
              <li>
                <FaWhatsapp />
                <a href="https://wa.me/918791734170" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:studios.pixelnest@gmail.com">studios.pixelnest@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} PixelNest Studio. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;