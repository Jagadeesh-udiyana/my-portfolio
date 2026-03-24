import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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

  return (
    <motion.section
      id="about"
      className="section about-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="about-card"
        variants={scaleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="about-content">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            I'm a passionate Frontend Developer with <strong>2.6+ years of experience</strong> building responsive
            web and mobile applications using Angular, Ionic, TypeScript and JavaScript. I'm currently expanding my skills
            in React, Next.js, and backend development (C#, Node.js) to grow as a Full Stack Developer.
          </motion.p>
          <motion.div
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="stat"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.span
                className="stat-number"
                animate={{ color: ["#ffea00", "#ffa500", "#ffea00"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                2.6+
              </motion.span>
              <span className="stat-label">Years Experience</span>
            </motion.div>
            <motion.div
              className="stat"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.span
                className="stat-number"
                animate={{ color: ["#ffea00", "#ffa500", "#ffea00"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                7+
              </motion.span>
              <span className="stat-label">Projects Delivered</span>
            </motion.div>
            <motion.div
              className="stat"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.span
                className="stat-number"
                animate={{ color: ["#ffea00", "#ffa500", "#ffea00"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                19+
              </motion.span>
              <span className="stat-label">Projects Maintained</span>
            </motion.div>
            <motion.div
              className="stat"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.span
                className="stat-number"
                animate={{ color: ["#ffea00", "#ffa500", "#ffea00"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                15+
              </motion.span>
              <span className="stat-label">Technologies</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
