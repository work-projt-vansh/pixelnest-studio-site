import React from 'react';
import './LegalPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <div className="legal-card">
          <p>Last updated: [Date]</p>
          <p>
            Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
          </p>
        </div>
        <div className="legal-card">
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information from you such as your name, email address, and other details when you voluntarily provide it to us.
          </p>
        </div>
        <div className="legal-card">
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide and improve our services, to communicate with you, and to personalize your experience.
          </p>
        </div>
        <div className="legal-card">
          <h2>Security</h2>
          <p>
            We are committed to ensuring that your information is secure. We have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
          </p>
        </div>
        <div className="legal-card">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
