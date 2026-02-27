import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We Transform Ideas Into{' '}
              <span className="gradient-text">Beautiful Digital Experiences</span>
            </motion.h1>

            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your brand deserves more than just a website. Get stunning UI/UX design, 
              powerful development, and complete branding that drives real growth. 
              Trusted by ambitious startups and businesses across India.
            </motion.p>

            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact" className="btn btn-primary btn-large">
                Start Your Project
                <FaArrowRight />
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-large">
                View Our Work
              </Link>
            </motion.div>

            <motion.div 
              className="hero-trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="trust-item">
                <FaCheckCircle />
                <span>8+ Projects Delivered</span>
              </div>
              <div className="trust-item">
                <FaCheckCircle />
                <span>4-6 Week Turnaround</span>
              </div>
              <div className="trust-item">
                <FaCheckCircle />
                <span>100% Satisfaction Rate</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: isPageVisible ? 1 : 0,
              scale: isPageVisible ? 1 : 0.9,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-visual-card">
              <div className="visual-content">
                <img src="/images/hero-visual.png" alt="PixelNest Digital Experiences" className="hero-img" />
              </div>
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
