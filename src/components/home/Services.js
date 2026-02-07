import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaintBrush, FaCode, FaStar, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Beautiful, conversion-focused interfaces that users love. We design experiences that are intuitive, engaging, and built to drive your business goals."
    },
    {
      id: 2,
      icon: <FaCode />,
      title: "Website Development",
      description: "Fast, responsive, SEO-optimized websites built with modern technology. From landing pages to complex web applications, we bring designs to life flawlessly."
    },
    {
      id: 3,
      icon: <FaStar />,
      title: "Branding & Logo Design",
      description: "Complete brand identities that tell your story. Professional logos, color systems, and brand guidelines that make you memorable."
    }
  ];

  return (
    <section className="services-section section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Everything Your Brand Needs to Succeed Online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            From concept to launch, we deliver complete digital solutions that make your business stand out.
          </motion.p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/services" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
