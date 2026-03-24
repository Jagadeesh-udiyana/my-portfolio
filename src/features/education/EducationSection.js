import React from "react";
import { motion } from "framer-motion";
import "./EducationSection.css";

const EducationSection = () => {
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

  const educationData = [
    {
      degree: "MBA in Data Science & AI",
      institution: "SRM University",
      cgpa: "Passout: 2027",
      icon: "fas fa-brain",
      delay: 0,
      badge: "Currently Pursuing",
      badgeColor: "#25D366",
    },
    {
      degree: "B.Tech in EEE",
      institution: "AITAM",
      cgpa: "8.6",
      icon: "fas fa-graduation-cap",
      delay: 0.5,
    },
    {
      degree: "Intermediate (M.P.C)",
      institution: "Sathavahana Jr College",
      cgpa: "9.29",
      icon: "fas fa-book",
      delay: 1,
    },
    {
      degree: "S.S.C",
      institution: "Narayana High School",
      cgpa: "8.8",
      icon: "fas fa-school",
      delay: 1.5,
    },
  ];

  return (
    <motion.section
      id="education"
      className="section education-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        Education
      </motion.h2>
      <motion.div
        className="education-cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            className="education-card"
            variants={scaleVariants}
            whileHover={{ scale: 1.08, boxShadow: "0 15px 40px rgba(255, 234, 0, 0.2)" }}
          >
            {/* {edu.badge && (
              <div className="diagonal-badge">
                <span>{edu.badge}</span>
              </div>
            )} */}
            <motion.div
              className="education-icon"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: edu.delay }}
            >
              <i className={edu.icon}></i>
            </motion.div>
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="cgpa">CGPA: <strong>{edu.cgpa}</strong></p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;
