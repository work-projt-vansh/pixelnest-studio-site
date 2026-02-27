import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaStar, FaCheck } from 'react-icons/fa';
import FinalCTA from '../components/home/FinalCTA';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Transform your digital product with user-centered design that looks stunning and converts like crazy.",
      features: [
        "User Research & Persona Development",
        "Wireframing & Prototyping",
        "High-Fidelity Mockups",
        "Design System Creation",
        "Responsive Design (Mobile, Tablet, Desktop)"
      ],
      pricing: "Starts at ₹5,000"
    },
    {
      id: 2,
      icon: <FaCode />,
      title: "Website Development",
      description: "Bring your designs to life with clean, performant code that works flawlessly across all devices.",
      features: [
        "Pixel-Perfect Implementation",
        "Responsive Development",
        "Performance Optimization",
        "SEO Best Practices",
        "CMS Integration"
      ],
      pricing: "Starts at ₹3,500"
    },
    {
      id: 3,
      icon: <FaStar />,
      title: "Branding & Logo Design",
      description: "Build a memorable brand identity that resonates with your audience and stands out in the market.",
      features: [
        "Logo Design + Variations",
        "Complete Color System",
        "Typography Scale",
        "Brand Style Guide",
        "Marketing Templates"
      ],
      pricing: "Starts at ₹5,000"
    }
  ];

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Design & Development Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-subtitle"
          >
            From concept to launch, we deliver complete digital solutions that drive real results.
          </motion.p>
        </div>
      </section>

      <section className="services-detail section">
        <div className="container">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-detail-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-detail-header">
                <div className="service-detail-icon">{service.icon}</div>
                <div>
                  <h2>{service.title}</h2>
                  <p className="service-detail-description">{service.description}</p>
                </div>
              </div>

              <div className="service-detail-content">
                <div className="service-features">
                  <h3>What You'll Get:</h3>
                  <ul>
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheck />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-pricing">
                  <h3>Starting Price:</h3>
                  <div className="pricing-box">
                    <span className="price">{service.pricing}</span>
                    <p>Custom pricing based on project scope</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Services;