import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = ({ parallaxX = 0, parallaxY = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <header className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          x: parallaxX * 0.3,
          y: parallaxY * 0.3,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          👋 Hi, I'm <span className="highlight">Jagadeesh Udiyana</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Junior Software Developer
        </motion.p>

        <motion.div
          className="socials"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="mailto:udiyanajagadeesh@gmail.com"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <i className="fas fa-envelope"></i> <span>Email</span>
          </motion.a>
          <motion.a
            href="https://wa.me/918374822732"
            target="_blank"
            rel="noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <i className="fab fa-whatsapp"></i> <span>WhatsApp</span>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/jagadeeesh_c/"
            target="_blank"
            rel="noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <i className="fab fa-instagram"></i> <span>Instagram</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jagadeesh-udiyana-711019230"
            target="_blank"
            rel="noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <i className="fab fa-linkedin"></i> <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/bZiVql4joM/"
            target="_blank"
            rel="noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <i className="fas fa-terminal"></i> <span>LeetCode</span>
          </motion.a>
          <motion.a
            href="https://www.hackerrank.com/profile/udiyanajagadeesh"
            target="_blank"
            rel="noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <i className="fab fa-hackerrank"></i> <span>HackerRank</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
