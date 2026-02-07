import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
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
                <span>50+ Projects Delivered</span>
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
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-visual-card">
              <div className="visual-content">
                <div className="visual-placeholder">
                  <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                    <defs>
                      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#4F46E5', stopOpacity: 0.8}} />
                        <stop offset="100%" style={{stopColor: '#7C3AED', stopOpacity: 0.8}} />
                      </linearGradient>
                    </defs>
                    <circle cx="200" cy="200" r="150" fill="url(#heroGradient)" opacity="0.3"/>
                    <circle cx="200" cy="200" r="100" fill="url(#heroGradient)" opacity="0.5"/>
                    <circle cx="200" cy="200" r="50" fill="url(#heroGradient)"/>
                  </svg>
                </div>
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
