import React from 'react';
import './LegalPages.css';

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Terms of Service</h1>
        <div className="legal-card">
          <p>Last updated: [Date]</p>
          <h2>1. Introduction</h2>
          <p>
            Welcome to our website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>
        </div>
        <div className="legal-card">
          <h2>2. Intellectual Property</h2>
          <p>
            All content included on this site, such as text, graphics, logos, and images, is the property of the website owner and is protected by international copyright laws.
          </p>
        </div>
        <div className="legal-card">
          <h2>3. Disclaimer</h2>
          <p>
            The information on this website is for general informational purposes only. We make no warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.
          </p>
        </div>
        <div className="legal-card">
          <h2>4. Limitation of Liability</h2>
          <p>
            In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of this website.
          </p>
        </div>
        <div className="legal-card">
          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at [Your Contact Information].
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
