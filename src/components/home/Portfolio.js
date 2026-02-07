import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Portfolio.css';

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: "MasalaStreet Restaurant",
      description: "Complete website redesign and branding for modern Indian dining",
      tags: ["Branding", "Web Design", "Development"],
      image: "gradient-1"
    },
    {
      id: 2,
      title: "CloudMetrics SaaS Dashboard",
      description: "Intuitive analytics dashboard that increased user engagement by 67%",
      tags: ["UI/UX Design", "Product Design"],
      image: "gradient-2"
    },
    {
      id: 3,
      title: "FitFusion Fitness Brand",
      description: "Bold brand identity and website that drove 3x membership growth",
      tags: ["Branding", "Web Development"],
      image: "gradient-3"
    }
  ];

  return (
    <section className="portfolio-preview section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Recent Projects That Speak for Themselves
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            See how we've helped businesses transform their digital presence.
          </motion.p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`portfolio-image ${project.image}`}>
                <div className="portfolio-overlay">
                  <Link to="/portfolio" className="view-project">
                    View Case Study <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/portfolio" className="btn btn-primary">
            View Full Portfolio <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
