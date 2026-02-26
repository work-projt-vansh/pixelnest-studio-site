import React, { useState } from 'react';
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
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section faq">
      <div className="container">
        <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;