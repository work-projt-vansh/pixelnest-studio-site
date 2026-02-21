import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const team = [
    {
      name: "Vanshaj Rawat",
      role: "Founder & Creative Director",
      expertise: "Brand Strategy, UI/UX Design, Design Systems",
      description: "8+ years in product design and branding. Former design lead at a leading SaaS company."
    },
    {
      name: "Vaibhav",
      role: "Lead Developer",
      expertise: "React, Next.js, Node.js, Database Design",
      description: "Full-stack developer with 40+ websites and web applications built. Passionate about clean code."
    }
  ];

  const values = [
    {
      title: "Excellence Without Compromise",
      description: "We obsess over every pixel, every interaction, and every detail to deliver work that exceeds expectations."
    },
    {
      title: "Transparent Collaboration",
      description: "Clear communication, honest timelines, and collaborative partnerships define how we work with every client."
    },
    {
      title: "Innovation Through Simplicity",
      description: "We create sophisticated solutions through clean, intuitive design that puts user experience first."
    },
    {
      title: "Growth-Focused Approach",
      description: "Every project is designed with your business goals in mind, ensuring our work drives measurable results."
    },
    {
      title: "Continuous Evolution",
      description: "We stay ahead of design trends and technology to deliver modern, future-proof solutions."
    }
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
            We're on a mission to democratize exceptional design and development for Indian businesses.
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
                PixelNest Studio was born from a simple frustration: too many talented founders and 
                businesses were held back by mediocre design and development. In 2023, we recognized 
                that while India had incredible entrepreneurial energy, many startups and small 
                businesses struggled to compete digitally because quality design services were either 
                unaffordable or inaccessible.
              </p>
              <p>
                What started as freelance projects quickly evolved into something bigger. Today, 
                PixelNest Studio is a specialized design and development agency focused exclusively 
                on helping ambitious startups and businesses build digital products that drive real growth.
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

      <section className="about-team section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet The Team
          </motion.h2>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="team-avatar">{member.name.charAt(0)}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-expertise"><strong>Expertise:</strong> {member.expertise}</p>
                <p className="team-description">{member.description}</p>
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
            <h2>Let's Work Together</h2>
            <p>Ready to transform your digital presence? Get in touch and let's create something extraordinary.</p>
            <a href="/contact" className="btn btn-primary btn-large">
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
