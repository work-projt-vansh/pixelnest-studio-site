import React from 'react';
import './OurProcess.css';

const OurProcess = () => {
  const processSteps = [
    { step: 1, title: 'Understand your business needs' },
    { step: 2, title: 'Plan structure & design' },
    { step: 3, title: 'Build and develop' },
    { step: 4, title: 'Review and refine' },
    { step: 5, title: 'Launch and support' }
  ];

  return (
    <section className="section our-process">
      <div className="container">
        <h2>OUR PROCESS</h2>
        <div className="process-steps">
          {processSteps.map((item) => (
            <div className="process-step" key={item.step}>
              <div className="step-number">{item.step}</div>
              <h3 className="step-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;