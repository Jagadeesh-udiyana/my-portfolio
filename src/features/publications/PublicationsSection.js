import React from "react";
import { motion } from "framer-motion";
import "./PublicationsSection.css";

const PublicationsSection = () => {
  const rotateVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="publications"
      className="section publications-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        Publications
      </motion.h2>
      <motion.div
        className="publication-card"
        variants={rotateVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="publication-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>Frequency and Voltage Control of Multi-Area Multisource Power System Using Whale Optimization Algorithm (WOA)</h3>
        </motion.div>

        <motion.div
          className="publication-details"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="publication-meta">
            <motion.div className="meta-item" whileHover={{ x: 5 }}>
              <span className="meta-icon"><i className="fas fa-book"></i></span>
              <div>
                <p className="meta-label">Publisher</p>
                <p className="meta-value">Springer, Cham</p>
              </div>
            </motion.div>
            <motion.div className="meta-item" whileHover={{ x: 5 }}>
              <span className="meta-icon"><i className="fas fa-calendar"></i></span>
              <div>
                <p className="meta-label">Publication Date</p>
                <p className="meta-value">May 29, 2024</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          className="publication-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          The stability of terminal voltage and nominal frequency in an interlinked power system (IPS) is a foremost challenge. The active and reactive power requirements are impacted by load fluctuations or other disturbances, which has a negative impact on how well IPS functions normally. In order to keep the terminal voltage and frequency at their recommended levels, Tie-line is used to connect the loops of the automatic voltage regulator (AVR) and load frequency control (LFC). This work presents a comprehensive analysis of frequency and voltage control mechanisms in multi-area power systems.
        </motion.p>

        <motion.a
          href="https://link.springer.com/chapter/10.1007/978-3-031-51167-7_12"
          target="_blank"
          rel="noreferrer"
          className="btn publication-link"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <i className="fas fa-external-link-alt"></i>
          <span>View Publication</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default PublicationsSection;
