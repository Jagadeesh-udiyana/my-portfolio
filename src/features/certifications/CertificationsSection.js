import React from "react";
import { motion } from "framer-motion";
import "./CertificationsSection.css";

const CertificationsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const certifications = [
    {
      icon: "fas fa-certificate",
      title: "Angular Course Completion",
      issuer: "Self-Learning Course",
      date: "Valid from: May 2024 | Does not expire",
      link: "https://drive.google.com/file/d/1rbXYAfTJncjOrKuzA8TFYOCkegkloTD3/view",
      delay: 0,
    },
    {
      icon: "fas fa-certificate",
      title: "JavaScript Course Completion",
      issuer: "Self-Learning Course",
      date: "Valid from: May 2024 | Does not expire",
      link: "https://drive.google.com/file/d/1akrgi68L609TayNzWcRbZ8Fcl7mZQ87g/view",
      delay: 0.5,
    },
    {
      icon: "fas fa-certificate",
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      issuer: "Udemy",
      date: "Valid from: May 2023 | Does not expire",
      link: "https://docs.google.com/presentation/d/1cSbcL7DUJj5OJVoFwD_UdQdeAwpbJ2sSjbDvpmZfXGQ/edit",
      delay: 1,
    },
    {
      icon: "fas fa-certificate",
      title: "Power System Workshop & Technical Session",
      issuer: "International & National Workshop",
      date: "Completion Certificate",
      link: "https://www.udemy.com/certificate/UC-6b92c761-4e57-410c-a221-1da405fb7192/",
      delay: 1.5,
    },
  ];

  return (
    <motion.section
      id="certifications"
      className="section certifications-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        Certifications
      </motion.h2>
      <motion.div
        className="certifications-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            className="certification-card"
            variants={scaleVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(255, 234, 0, 0.2)" }}
          >
            <motion.div
              className="certification-badge"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: cert.delay }}
            >
              <i className={cert.icon}></i>
            </motion.div>
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="cert-link"
              whileHover={{ scale: 1.1, x: 5 }}
            >
              <i className="fas fa-eye"></i> View Certificate
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CertificationsSection;
