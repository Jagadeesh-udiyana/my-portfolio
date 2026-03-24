import React from "react";
import { motion } from "framer-motion";
import { experienceProjects } from "../../data/experienceProjects";
import { useAutoCycle } from "../../hooks/useCustomHooks";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  const [activeProject, setActiveProject] = useAutoCycle(experienceProjects.length, 6000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const project = experienceProjects[activeProject];

  return (
    <motion.section
      id="experience"
      className="section experience-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        Professional Experience
      </motion.h2>

      {/* Project Navigation Badges */}
      <motion.div
        className="project-nav"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {experienceProjects.map((proj, idx) => (
          <motion.button
            key={idx}
            className={`nav-badge ${activeProject === idx ? "active" : ""}`}
            onClick={() => setActiveProject(idx)}
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            style={{
              borderColor: proj.color,
              backgroundColor: activeProject === idx ? proj.color + "30" : "transparent",
            }}
          >
            <i className={proj.icon}></i>
            <span>{proj.name}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Active Project Detail Card */}
      <motion.div
        className="experience-detail-card"
        key={activeProject}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="detail-header">
          <div className="header-left">
            <div className="project-icon" style={{ backgroundColor: project.color + "20", borderColor: project.color }}>
              <i className={project.icon} style={{ color: project.color }}></i>
            </div>
            <div className="header-text">
              <h3>{project.name}</h3>
              <p className="subtitle">{project.overview}</p>
              <span className="company">
                <i className="fas fa-building"></i> {project.company} • {project.period}
              </span>
            </div>
          </div>
        </div>

        <p className="description">{project.description}</p>

        {/* Key Achievements */}
        <div className="achievements-section">
          <h4>
            <i className="fas fa-star"></i> Key Achievements
          </h4>
          <motion.div className="achievements-grid" variants={containerVariants} initial="hidden" animate="visible">
            {project.keyAchievements.map((achievement, idx) => (
              <motion.div key={idx} className="achievement-item" variants={itemVariants}>
                {achievement}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technologies */}
        <div className="tech-section">
          <h4>
            <i className="fas fa-cogs"></i> Technologies Used
          </h4>
          <div className="tech-tags">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modules */}
        {project.modules && (
          <div className="modules-section">
            <h4>
              <i className="fas fa-cube"></i> Core Modules
            </h4>
            <div className="modules-grid">
              {project.modules.map((module, idx) => (
                <div key={idx} className="module-item">
                  <i className="fas fa-check-circle"></i> {module}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Platforms */}
        {project.platforms && (
          <div className="platforms-section">
            <h4>
              <i className="fas fa-layer-group"></i> Multi-Platform Deployment
            </h4>
            <div className="platforms-grid">
              {project.platforms.map((platform, idx) => (
                <div key={idx} className="platform-box">
                  <div className="platform-header">
                    <i className={platform.icon}></i>
                    <h5>{platform.name}</h5>
                  </div>
                  <ul>
                    {platform.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights/Migration Impact */}
        {project.highlights && (
          <div className="highlights-section">
            <h4>
              <i className="fas fa-exchange-alt"></i> Migration Impact
            </h4>
            <div className="comparison-table">
              <div className="comparison-col">
                <p className="label">Before</p>
                {project.highlights.before.map((item, idx) => (
                  <div key={idx} className="item-before">
                    ❌ {item}
                  </div>
                ))}
              </div>
              <div className="arrow">→</div>
              <div className="comparison-col">
                <p className="label">After</p>
                {project.highlights.after.map((item, idx) => (
                  <div key={idx} className="item-after">
                    ✅ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        {project.features && (
          <div className="features-section">
            <h4>
              <i className="fas fa-list-check"></i> Core Features
            </h4>
            <div className="features-list">
              {project.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-dot"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Click Indicator */}
      <motion.div className="click-hint" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
        <i className="fas fa-click"></i> Click on project badges to explore details
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
