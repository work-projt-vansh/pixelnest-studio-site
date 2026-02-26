import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'How long does it take?',
      answer: '👉 3–7 days'
    },
    {
      question: 'Do I need to provide content?',
      answer: '👉 We can help'
    },
    {
      question: 'Will it work on mobile?',
      answer: '👉 Yes, fully responsive'
    },
    {
      question: 'Do you provide support after launch?',
      answer: '👉 Yes, we offer maintenance and support.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section faq">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <motion.div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3>{item.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="faq-answer open"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;