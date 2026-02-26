import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaStore, FaUserTie, FaPalette } from 'react-icons/fa';
import './WhoIsThisFor.css';

const WhoIsThisFor = () => {
  const targetAudience = [
    {
      title: "Startups",
      icon: <FaRocket />,
      description: "Turning MVP ideas into market-ready digital products."
    },
    {
      title: "Small Businesses",
      icon: <FaStore />,
      description: "Modernizing traditional businesses for the digital age."
    },
    {
      title: "Personal Brands",
      icon: <FaUserTie />,
      description: "Crafting unique identities for experts and influencers."
    },
    {
      title: "Creators",
      icon: <FaPalette />,
      description: "Showcasing portfolios for freelancers and artists."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="section who-is-this-for">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          WHO THIS IS FOR
        </motion.h2>
        <motion.div 
          className="audience-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {targetAudience.map((item, index) => (
            <motion.div 
              className="audience-card" 
              key={index}
              variants={itemVariants}
            >
              <div className="audience-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;