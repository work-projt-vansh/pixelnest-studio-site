import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Here you would send the data to your backend/email service
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something Amazing Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-subtitle"
          >
            Share your project details below and we'll get back to you within 24 hours with ideas and a detailed proposal.
          </motion.p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                Whether you're launching a new product, redesigning your brand, or need ongoing design support, 
                we're here to help.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h3>Phone & WhatsApp</h3>
                    <a href="tel:+918791724170">+91 8791734170</a>
                    <p>Mon-Sat, 10 AM - 7 PM IST</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon whatsapp">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h3>WhatsApp</h3>
                    <a href="https://wa.me/918791734170" target="_blank" rel="noopener noreferrer">
                      Chat with us now
                    </a>
                    <p>Quick responses guaranteed</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:studios.pixelnest@gmail.com">studios.pixelnest@gmail.com</a>
                    <p>We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="contact-benefits">
                <h3>What to expect:</h3>
                <ul>
                  <li><FaCheckCircle /> Free consultation call</li>
                  <li><FaCheckCircle /> Detailed project proposal</li>
                  <li><FaCheckCircle /> Transparent pricing</li>
                  <li><FaCheckCircle /> No obligation quote</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted && (
                <div className="success-message">
                  <FaCheckCircle />
                  <h3>Thank you for your inquiry!</h3>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name.message}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp *</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    {...register('projectType', { required: 'Please select a project type' })}
                    className={errors.projectType ? 'error' : ''}
                  >
                    <option value="">Select...</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="development">Website Development</option>
                    <option value="branding">Branding & Logo Design</option>
                    <option value="complete">Complete Package (Design + Development)</option>
                    <option value="redesign">Redesign / Update Existing Project</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && <span className="error-message">{errors.projectType.message}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range *</label>
                    <select
                      id="budget"
                      {...register('budget', { required: 'Please select a budget range' })}
                      className={errors.budget ? 'error' : ''}
                    >
                      <option value="">Select...</option>
                      <option value="15-50k">₹15,000 - ₹50,000</option>
                      <option value="50-100k">₹50,000 - ₹1,00,000</option>
                      <option value="100-250k">₹1,00,000 - ₹2,50,000</option>
                      <option value="250-500k">₹2,50,000 - ₹5,00,000</option>
                      <option value="500k+">₹5,00,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                    {errors.budget && <span className="error-message">{errors.budget.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeline">Timeline *</label>
                    <select
                      id="timeline"
                      {...register('timeline', { required: 'Please select a timeline' })}
                      className={errors.timeline ? 'error' : ''}
                    >
                      <option value="">Select...</option>
                      <option value="asap">ASAP (Rush project)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="flexible">Flexible / Exploring options</option>
                    </select>
                    {errors.timeline && <span className="error-message">{errors.timeline.message}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Description *</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us about your project, goals, target audience, and any specific requirements..."
                    {...register('message', { required: 'Please describe your project' })}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-large btn-full">
                  Send Project Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
