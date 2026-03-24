import React from "react";
import { motion } from "framer-motion";
import "./SkillsSection.css";

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillsData = {
    frontend: ["Angular", "React", "Ionic", "TypeScript", "JavaScript", "HTML", "CSS"],
    backend: ["Node.js", "C#", "Python"],
    database: ["SQL"],
    tools: ["GitLab", "GitHub", "VS Code", "Postman", "Android Studio", "Android Debug Bridge", "SQLite"],
    platforms: [
      {
        name: "HackerRank",
        url: "https://www.hackerrank.com/profile/udiyanajagadeesh",
        icon: "fab fa-hackerrank",
        stats: "SQL 5⭐ | C 3⭐ | Python 3⭐",
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/bZiVql4joM/",
        icon: "fas fa-code-branch",
        stats: "Active Coder",
      },
    ],
  };

  return (
    <motion.section
      id="skills"
      className="section skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        Technical Skills
      </motion.h2>

      {/* Frontend Skills */}
      <motion.div
        className="skill-category"
        variants={slideInLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 234, 0, 0.2)" }}
      >
        <div className="category-header">
          <i className="fas fa-code"></i>
          <h3>Frontend Development</h3>
        </div>
        <motion.div
          className="skill-tags"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {skillsData.frontend.map((skill, i) => (
            <motion.span
              key={i}
              className="skill-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.15, boxShadow: "0 8px 20px rgba(255, 234, 0, 0.3)" }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Backend Skills */}
      <motion.div
        className="skill-category"
        variants={slideInRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 234, 0, 0.2)" }}
      >
        <div className="category-header">
          <i className="fas fa-server"></i>
          <h3>Backend Development</h3>
        </div>
        <motion.div
          className="skill-tags"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {skillsData.backend.map((skill, i) => (
            <motion.span
              key={i}
              className="skill-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.15, boxShadow: "0 8px 20px rgba(255, 234, 0, 0.3)" }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Database Skills */}
      <motion.div
        className="skill-category"
        variants={slideInLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 234, 0, 0.2)" }}
      >
        <div className="category-header">
          <i className="fas fa-database"></i>
          <h3>Database</h3>
        </div>
        <motion.div
          className="skill-tags"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.span
            className="skill-tag skill-expert"
            variants={itemVariants}
            whileHover={{ scale: 1.15, boxShadow: "0 8px 20px rgba(255, 234, 0, 0.3)" }}
          >
            SQL
          </motion.span>
          <motion.span className="skill-badge" variants={itemVariants}>
            HackerRank 5⭐
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Tools & Platforms */}
      <motion.div
        className="skill-category"
        variants={slideInRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 234, 0, 0.2)" }}
      >
        <div className="category-header">
          <i className="fas fa-tools"></i>
          <h3>Tools & Platforms</h3>
        </div>
        <motion.div
          className="skill-tags"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {skillsData.tools.map((skill, i) => (
            <motion.span
              key={i}
              className="skill-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.15, boxShadow: "0 8px 20px rgba(255, 234, 0, 0.3)" }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Coding Platforms */}
      <motion.div
        className="skill-category"
        variants={slideInLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 234, 0, 0.2)" }}
      >
        <div className="category-header">
          <i className="fas fa-terminal"></i>
          <h3>Coding Platforms</h3>
        </div>
        <motion.div
          className="platform-links"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {skillsData.platforms.map((platform, i) => (
            <motion.a
              key={i}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="platform-link"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <i className={platform.icon}></i>
              <span>{platform.name}</span>
              <small>{platform.stats}</small>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
