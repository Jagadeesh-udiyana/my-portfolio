import React from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const scaleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const contactData = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'udiyanajagadeesh@gmail.com',
      link: 'mailto:udiyanajagadeesh@gmail.com',
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+91-8374822732',
      link: 'tel:+918374822732',
    },
  ];

  const contactButtons = [
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      link: 'https://wa.me/918374822732',
      color: '#25D366',
      delay: 0,
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      link: 'https://www.linkedin.com/in/jagadeesh-udiyana-711019230/',
      color: '#0A66C2',
      delay: 0.2,
    },
  ];

  return (
    <motion.section
      className="contact-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2>Get In Touch</h2>

      <motion.div className="contact-card" variants={itemVariants}>
        <motion.div className="contact-intro" variants={itemVariants}>
          <p>I'd love to hear from you! Feel free to reach out via email or phone.</p>
        </motion.div>

        <motion.div
          className="contact-details"
          variants={containerVariants}
        >
          {contactData.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="contact-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="contact-icon">
                <i className={item.icon}></i>
              </div>
              <div className="contact-content">
                {/* <span className="contact-label">{item.label}</span> */}
                <span className="contact-value">{item.value}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="contact-buttons"
          variants={containerVariants}
        >
          {contactButtons.map((btn, index) => (
            <motion.a
              key={index}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
              variants={scaleVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 20px ${btn.color}40`,
              }}
              whileTap={{ scale: 0.95 }}
              style={{ '--btn-color': btn.color }}
            >
              <i className={btn.icon}></i>
              <span>{btn.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
