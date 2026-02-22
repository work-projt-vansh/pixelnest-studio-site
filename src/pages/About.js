import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "We deliver work that exceeds expectations by focusing on quality and precision."
    },
    {
      title: "Transparency",
      description: "We believe in clear communication, honest timelines, and collaborative partnerships."
    },
    {
      title: "Simplicity",
      description: "We create sophisticated solutions through clean, intuitive design that prioritizes user experience."
    },
    {
      title: "Results",
      description: "Every project is designed to help your business grow and achieve measurable results."
    },
    {
      title: "Innovation",
      description: "We stay ahead of design and technology trends to deliver modern, future-proof solutions."
    }
  ];

  const trustSignals = [
    "Startup-friendly pricing",
    "Fast delivery (3–7 days)",
    "Direct communication",
    "Focus on real results"
  ];

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About PixelNest Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-subtitle"
          >
            We help startups and small businesses build modern websites that actually bring customers.
          </motion.p>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Beginning</h2>
              <p>
                We started PixelNest Studio with one goal: to help businesses build a strong online
                presence without spending huge money.
              </p>
              <p>
                What began as a few freelance projects quickly grew into a specialized agency. Today,
                we focus on helping ambitious startups and businesses create digital experiences that
                drive real growth.
              </p>
            </motion.div>

            <motion.div
              className="story-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="story-image gradient-about"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaCheckCircle className="value-icon" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-founder section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About the Founder
          </motion.h2>

          <div className="founder-card">
            <div className="founder-content">
              <h3>Hi, I’m Vanshaj Rawat, founder of PixelNest Studio.</h3>
              <p>
                I started this studio with a passion for design and technology, aiming to help startups
                and small businesses build modern digital experiences.
              </p>
              <p>
                I focus on creating clean, fast, and effective websites that not only look good but
                also help businesses grow.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-trust section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Startups Love Us
          </motion.h2>
          <div className="trust-grid">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                className="trust-signal"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaCheckCircle className="value-icon" />
                <p>{signal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta section">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Let’s build a website that brings you real customers.</h2>
            <div>
                <a href="/contact" className="btn btn-primary btn-large">
                Get Free Consultation
                </a>
                <a href="https://wa.me/918954842181" className="btn btn-secondary btn-large">
                WhatsApp Now
                </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
