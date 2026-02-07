import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { portfolio } from '../data/portfolio';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Recent Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-subtitle"
          >
            Explore our portfolio of successful projects with real results and client testimonials.
          </motion.p>
        </div>
      </section>

      <section className="case-studies section">
        <div className="container">
          {portfolio.map((project, index) => (
            <motion.div
              key={project.id}
              className="case-study"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={`case-study-image gradient-${project.id}`}>
                <div className="case-study-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag-white">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="case-study-content">
                <h2>{project.title}</h2>
                <p className="case-study-description">{project.description}</p>

                <div className="case-study-details">
                  <div className="detail-section">
                    <h3>The Challenge</h3>
                    <p>{project.challenge}</p>
                  </div>

                  <div className="detail-section">
                    <h3>Our Solution</h3>
                    <p>{project.solution}</p>
                  </div>

                  <div className="detail-section">
                    <h3>Results Achieved</h3>
                    <ul className="results-list">
                      {project.results.map((result, i) => (
                        <li key={i}>
                          <FaCheckCircle />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h3>Tools & Technologies</h3>
                    <div className="tools-list">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="tool-tag">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="portfolio-cta section">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ready to Create Your Success Story?</h2>
            <p>Let's build something amazing together. Get in touch to discuss your project.</p>
            <a href="/contact" className="btn btn-primary btn-large">
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
