import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

// import all images dynamically
const images = [
  "img.webp",
  "img1.jpeg",
  "img2.webp",
  "img3.jpg",
  "img4.jpg",
  "img5.webp",
  // "img6.webp",
  "img7.webp",
  "img8.webp",
  "img9.webp",
  "img10.jpeg",
].map((img) => require(`./assets/img/${img}`));

function App() {
  const [showMore, setShowMore] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const appRef = useRef(null);

  // Mouse move tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (appRef.current) {
        const rect = appRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rotateVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Parallax offset based on mouse position
  const parallaxX = (mousePosition.x - 0.5) * 20;
  const parallaxY = (mousePosition.y - 0.5) * 20;
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="app" ref={appRef}>
      {/* Mouse glow effect */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x * window.innerWidth - 100,
          y: mousePosition.y * window.innerHeight - 100,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />

      {/* Hero Section */}
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
            <motion.a href="mailto:udiyanajagadeesh@gmail.com" variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
              <i className="fas fa-envelope"></i> <span>Email</span>
            </motion.a>
            <motion.a href="https://wa.me/918374822732" target="_blank" rel="noreferrer" variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
              <i className="fab fa-whatsapp"></i> <span>WhatsApp</span>
            </motion.a>
            <motion.a href="https://www.instagram.com/jagadeeesh_c/" target="_blank" rel="noreferrer" variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
              <i className="fab fa-instagram"></i> <span>Instagram</span>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/jagadeesh-udiyana-711019230" target="_blank" rel="noreferrer" variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
              <i className="fab fa-linkedin"></i> <span>LinkedIn</span>
            </motion.a>
            <motion.a href="https://leetcode.com/u/bZiVql4joM/" target="_blank" rel="noreferrer" variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
              <i className="fas fa-terminal"></i> <span>LeetCode</span>
            </motion.a>
            <motion.a href="https://www.hackerrank.com/profile/udiyanajagadeesh" target="_blank" rel="noreferrer" variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
              <i className="fab fa-hackerrank"></i> <span>HackerRank</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </header>

      {/* About Section */}
      <motion.section
        id="about"
        className="section about-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
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
              I'm a passionate Frontend Developer with <strong>2.5+ years of experience</strong> building responsive
              web and mobile applications using Angular, JavaScript, and Ionic. I'm currently expanding my skills
              in React, Next.js, and backend development (C#, Node.js) to grow as a Full Stack Developer.
            </motion.p>
            <motion.div
              className="about-stats"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div className="stat" variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
                <motion.span className="stat-number" animate={{ color: ["#ffea00", "#ffa500", "#ffea00"] }} transition={{ duration: 3, repeat: Infinity }}>
                  2.5+
                </motion.span>
                <span className="stat-label">Years Experience</span>
              </motion.div>
              <motion.div className="stat" variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
                <motion.span className="stat-number" animate={{ color: ["#ffea00", "#ffa500", "#ffea00"] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>
                  7+
                </motion.span>
                <span className="stat-label">Projects Delivered</span>
              </motion.div>
              <motion.div className="stat" variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
                <motion.span className="stat-number" animate={{ color: ["#ffea00", "#ffa500", "#ffea00"] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }}>
                  15+
                </motion.span>
                <span className="stat-label">Technologies</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
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
          <motion.div className="skill-tags" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
            {["Angular", "React", "Ionic", "TypeScript", "JavaScript", "HTML", "CSS"].map((skill, i) => (
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
          <motion.div className="skill-tags" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
            {["Node.js", "C#", "Python"].map((skill, i) => (
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
          <motion.div className="skill-tags" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
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
          <motion.div className="skill-tags" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
            {["GitLab", "GitHub", "VS Code", "Postman", "Android Studio", "Android Debug Bridge"].map((skill, i) => (
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
          <motion.div className="platform-links" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
            <motion.a
              href="https://www.hackerrank.com/profile/udiyanajagadeesh"
              target="_blank"
              rel="noreferrer"
              className="platform-link"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <i className="fab fa-hackerrank"></i>
              <span>HackerRank</span>
              <small>SQL 5⭐ | C 3⭐ | Python 3⭐</small>
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/bZiVql4joM/"
              target="_blank"
              rel="noreferrer"
              className="platform-link"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <i className="fas fa-code-branch"></i>
              <span>LeetCode</span>
              <small>Active Coder</small>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
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
        <motion.div
          className="experience-card"
          variants={scaleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="experience-header">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Junior Software Developer
            </motion.h3>
            <motion.span
              className="company-badge"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Experts in Solutions, Chennai
            </motion.span>
            <motion.span
              className="duration"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <i className="fas fa-calendar"></i> Aug 2023 – Present
            </motion.span>
          </div>

          {/* State controlled show/hide */}
          <motion.div
            className="experience-summary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p>
              <strong>Summary:</strong> Built responsive web & mobile apps using Angular and Ionic, improved app
              performance, and contributed to multiple full-stack projects.
            </p>
          </motion.div>

          <motion.ul
            className={`exp-details ${showMore ? "show" : "hide"}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: showMore ? 1 : 0, height: showMore ? "auto" : 0 }}
            transition={{ duration: 0.5 }}
          >
            <li>VENUS: Migrated the existing application from Angular 5 to Angular 20, modernizing the codebase and
              upgrading dependencies to align with the latest framework standards. Refactored legacy components,
              optimized performance, improved state management, enhanced routing and module structure, and
              ensured compatibility with updated libraries and APIs. Implemented best practices, improved UI
              responsiveness, resolved deprecated features, and strengthened overall application stability and
              maintainability. </li>
            <li>HRMS: This was my first major project and formed the foundation of my frontend development career.
              Built core HRMS modules including employee onboarding, attendance tracking, leave management, payroll processing,
              role-based access control, and reporting dashboards. Through this project, gained strong hands-on experience in Angular fundamentals, component-based architecture, REST API integration, state management, form validations, and best UI practices.</li>
            <li>FIT-O-FIT Web App: Developed a complete gym management system covering customer enquiries, registrations, subscription plans with dynamic discount calculations, payments, expenses tracking, workout and diet plan creation, and live dashboards with charts.</li>
            <li>Migration Angular Framework: Successfully migrated the application from Angular 14 to Angular 19, ensuring compatibility, improved performance, and adoption of latest framework features while minimizing downtime.</li>
            <li>FIT-O-FIT Admin Mobile App (Ionic): Replicated FIT-O-FIT web features in a cross-platform mobile app in IONIC 8 for admins to manage members, plans, payments, and expenses on the go.</li>
            <li>FIT-O-FIT User Mobile App (Ionic): Created a user-facing mobile app for gym members to check personal details, payment status, due amounts, subscriptions, workout schedules, and diet plans.</li>
            <li>Retail Mobile App (Ionic): Designed and implemented modules for product catalog, QR code generation and printing, billing, approvals, wastage entry, production status tracking, and stock management for retail businesses.</li>
            <li>Integrated RESTful APIs and developed frontend web and mobile applications using JavaScript, JSON, and Ionic Framework.</li>
            <li>Used Android Studio, ADB, and Ionic CLI for building, debugging, and deploying apps across multiple devices.</li>
            <li>Experienced in web application development, REST concepts, and performing extensive frontend unit testing during development.</li>
            <li>Collaborated with UI/UX designers, backend developers, and testers to deliver user-friendly, high-performance solutions within deadlines.</li>
          </motion.ul>

          <motion.button
            className="btn toggle-btn"
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? "Show Less" : "Show More"}
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Publications Section */}
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

      {/* Certifications Section */}
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
          <motion.div
            className="certification-card"
            variants={scaleVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(255, 234, 0, 0.2)" }}
          >
            <motion.div
              className="certification-badge"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <i className="fas fa-certificate"></i>
            </motion.div>
            <h3>Angular Course Completion</h3>
            <p className="cert-issuer">Self-Learning Course</p>
            <p className="cert-date">Valid from: May 2024 | Does not expire</p>
            <motion.a
              href="https://drive.google.com/file/d/1rbXYAfTJncjOrKuzA8TFYOCkegkloTD3/view"
              target="_blank"
              rel="noreferrer"
              className="cert-link"
              whileHover={{ scale: 1.1, x: 5 }}
            >
              <i className="fas fa-eye"></i> View Certificate
            </motion.a>
          </motion.div>

          <motion.div
            className="certification-card"
            variants={scaleVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(255, 234, 0, 0.2)" }}
          >
            <motion.div
              className="certification-badge"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <i className="fas fa-certificate"></i>
            </motion.div>
            <h3>JavaScript Course Completion</h3>
            <p className="cert-issuer">Self-Learning Course</p>
            <p className="cert-date">Valid from: May 2024 | Does not expire</p>
            <motion.a
              href="https://drive.google.com/file/d/1akrgi68L609TayNzWcRbZ8Fcl7mZQ87g/view"
              target="_blank"
              rel="noreferrer"
              className="cert-link"
              whileHover={{ scale: 1.1, x: 5 }}
            >
              <i className="fas fa-eye"></i> View Certificate
            </motion.a>
          </motion.div>

          <motion.div
            className="certification-card"
            variants={scaleVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(255, 234, 0, 0.2)" }}
          >
            <motion.div
              className="certification-badge"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <i className="fas fa-certificate"></i>
            </motion.div>
            <h3>100 Days of Code: The Complete Python Pro Bootcamp</h3>
            <p className="cert-issuer">Udemy</p>
            <p className="cert-date">Valid from: May 2023 | Does not expire</p>
            <motion.a
              href="https://docs.google.com/presentation/d/1cSbcL7DUJj5OJVoFwD_UdQdeAwpbJ2sSjbDvpmZfXGQ/edit"
              target="_blank"
              rel="noreferrer"
              className="cert-link"
              whileHover={{ scale: 1.1, x: 5 }}
            >
              <i className="fas fa-eye"></i> View Certificate
            </motion.a>
          </motion.div>

          <motion.div
            className="certification-card"
            variants={scaleVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(255, 234, 0, 0.2)" }}
          >
            <motion.div
              className="certification-badge"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            >
              <i className="fas fa-certificate"></i>
            </motion.div>
            <h3>Power System Workshop & Technical Session</h3>
            <p className="cert-issuer">International & National Workshop</p>
            <p className="cert-date">Completion Certificate</p>
            <motion.a
              href="https://www.udemy.com/certificate/UC-6b92c761-4e57-410c-a221-1da405fb7192/"
              target="_blank"
              rel="noreferrer"
              className="cert-link"
              whileHover={{ scale: 1.1, x: 5 }}
            >
              <i className="fas fa-eye"></i> View Certificate
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education */}
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
          <motion.div
            className="education-card"
            variants={scaleVariants}
            whileHover={{ scale: 1.08, boxShadow: "0 15px 40px rgba(255, 234, 0, 0.2)" }}
          >
            <motion.div
              className="education-icon"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <i className="fas fa-graduation-cap"></i>
            </motion.div>
            <h3>B.Tech in EEE</h3>
            <p className="institution">AITAM</p>
            <p className="cgpa">CGPA: <strong>8.6</strong></p>
          </motion.div>
          <motion.div
            className="education-card"
            variants={scaleVariants}
            whileHover={{ scale: 1.08, boxShadow: "0 15px 40px rgba(255, 234, 0, 0.2)" }}
          >
            <motion.div
              className="education-icon"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <i className="fas fa-book"></i>
            </motion.div>
            <h3>Intermediate (M.P.C)</h3>
            <p className="institution">Sathavahana Jr College</p>
            <p className="cgpa">CGPA: <strong>9.29</strong></p>
          </motion.div>
          <motion.div
            className="education-card"
            variants={scaleVariants}
            whileHover={{ scale: 1.08, boxShadow: "0 15px 40px rgba(255, 234, 0, 0.2)" }}
          >
            <motion.div
              className="education-icon"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <i className="fas fa-school"></i>
            </motion.div>
            <h3>S.S.C</h3>
            <p className="institution">Narayana High School</p>
            <p className="cgpa">CGPA: <strong>8.8</strong></p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Image Carousel */}
      <motion.section
        className="carousel-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          📷 My Work & Moments
        </motion.h2>
        <motion.div
          className="image-slider"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Slider {...settings}>
            {images.map((src, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }}>
                <motion.img src={src} alt={`img-${i}`} className="carousel-img" />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="section contact-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          Contact Me
        </motion.h2>

        <motion.div
          className="contact-card"
          variants={scaleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.p
            className="contact-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Let's connect and collaborate on amazing projects!
          </motion.p>

          <motion.div
            className="contact-details"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div className="contact-item" variants={itemVariants} whileHover={{ x: 10 }}>
              <i className="fas fa-envelope"></i>
              <div>
                <p>Email</p>
                <a href="mailto:udiyanajagadeesh@gmail.com" className="contact-link">udiyanajagadeesh@gmail.com</a>
              </div>
            </motion.div>
            <motion.div className="contact-item" variants={itemVariants} whileHover={{ x: 10 }}>
              <i className="fas fa-phone"></i>
              <div>
                <p>Phone</p>
                <a href="tel:+918374822732" className="contact-link">+91 83748 22732</a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-buttons"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.a
              href="https://wa.me/918374822732"
              target="_blank"
              rel="noreferrer"
              className="btn contact-btn whatsapp-btn"
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-whatsapp"></i>
              <span>Chat on WhatsApp</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jagadeesh-udiyana-711019230"
              target="_blank"
              rel="noreferrer"
              className="btn contact-btn linkedin-btn"
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin"></i>
              <span>Connect on LinkedIn</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.p
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          © 2025 Jagadeesh Udiyana | Built with ❤️ in React
        </motion.p>
      </motion.footer>
    </div>
  );
}

export default App;
