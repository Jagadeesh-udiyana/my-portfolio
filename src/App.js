import React, { useState } from "react";
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
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <motion.div className="hero-content" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1>
            👋 Hi, I'm <span className="highlight">Jagadeesh Udiyana</span>
          </h1>
          <p>Junior Software Developer</p>

          <div className="socials">
            <a href="mailto:udiyanajagadeesh@gmail.com">
              <i className="fas fa-envelope"></i> <span>Email</span>
            </a>
            <a href="https://wa.me/918374822732" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i> <span>WhatsApp</span>
            </a>
            <a href="https://www.instagram.com/jagadeeesh_c/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i> <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/jagadeesh-udiyana-711019230" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i> <span>LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/bZiVql4joM/" target="_blank" rel="noreferrer">
              <i className="fas fa-terminal"></i> <span>LeetCode</span>
            </a>
            <a href="https://www.hackerrank.com/profile/udiyanajagadeesh" target="_blank" rel="noreferrer">
              <i className="fab fa-hackerrank"></i> <span>HackerRank</span>
            </a>
          </div>
        </motion.div>
      </header>

      {/* Image Carousel */}
      <motion.section className="carousel-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>📷 My Work & Moments</h2>
        <Slider {...settings} className="image-slider">
          {images.map((src, i) => (
            <div key={i}>
              <img src={src} alt={`img-${i}`} className="carousel-img" />
            </div>
          ))}
        </Slider>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" className="section about-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>About Me</h2>
        <div className="about-card">
          <div className="about-content">
            <p>
              I'm a passionate Frontend Developer with <strong>2.5+ years of experience</strong> building responsive
              web and mobile applications using Angular, JavaScript, and Ionic. I'm currently expanding my skills
              in React, Next.js, and backend development (C#, Node.js) to grow as a Full Stack Developer.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2.5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">7+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section id="skills" className="section skills" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Technical Skills</h2>

        {/* Frontend Skills */}
        <div className="skill-category">
          <div className="category-header">
            <i className="fas fa-code"></i>
            <h3>Frontend Development</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Angular</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Ionic</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skill-category">
          <div className="category-header">
            <i className="fas fa-server"></i>
            <h3>Backend Development</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">C#</span>
            <span className="skill-tag">Python</span>
          </div>
        </div>

        {/* Database Skills */}
        <div className="skill-category">
          <div className="category-header">
            <i className="fas fa-database"></i>
            <h3>Database</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag skill-expert">SQL</span>
            <span className="skill-badge">HackerRank 5⭐</span>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="skill-category">
          <div className="category-header">
            <i className="fas fa-tools"></i>
            <h3>Tools & Platforms</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Postman</span>
            <span className="skill-tag">Android Studio</span>
          </div>
        </div>

        {/* Coding Platforms */}
        <div className="skill-category">
          <div className="category-header">
            <i className="fas fa-terminal"></i>
            <h3>Coding Platforms</h3>
          </div>
          <div className="platform-links">
            <a href="https://www.hackerrank.com/profile/udiyanajagadeesh" target="_blank" rel="noreferrer" className="platform-link">
              <i className="fab fa-hackerrank"></i>
              <span>HackerRank</span>
              <small>SQL 5⭐ | C 3⭐ | Python 3⭐</small>
            </a>
            <a href="https://leetcode.com/u/bZiVql4joM/" target="_blank" rel="noreferrer" className="platform-link">
              <i className="fas fa-code-branch"></i>
              <span>LeetCode</span>
              <small>Active Coder</small>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Experience */}
      {/* Experience Section */}
      <motion.section id="experience" className="section experience-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Professional Experience</h2>
        <div className="experience-card">
          <div className="experience-header">
            <h3>Junior Software Developer</h3>
            <span className="company-badge">Experts in Solutions, Chennai</span>
            <span className="duration">
              <i className="fas fa-calendar"></i> Aug 2023 – Present
            </span>
          </div>

          {/* State controlled show/hide */}
          <div className="experience-summary">
            <p>
              <strong>Summary:</strong> Built responsive web & mobile apps using Angular and Ionic, improved app
              performance, and contributed to multiple full-stack projects.
            </p>
          </div>

          <ul className={`exp-details ${showMore ? "show" : "hide"}`}>
            <li>VENUS: Migrated the existing application from Angular 5 to Angular 20, modernizing the codebase and
              upgrading dependencies to align with the latest framework standards. Refactored legacy components,
              optimized performance, improved state management, enhanced routing and module structure, and
              ensured compatibility with updated libraries and APIs. Implemented best practices, improved UI
              responsiveness, resolved deprecated features, and strengthened overall application stability and
              maintainability. </li>
            <li>HRMS: This was my first major project and formed the foundation of my frontend development career.
              Built core HRMS modules including employee onboarding, attendance tracking, leave management, payroll processing,
              role-based access control, and reporting dashboards. Through this project, gained strong hands-on experience in Angular fundamentals, component-based architecture, REST API integration, state management, form validations, and best UI practices.</li>
            {/* <li>HRMS: Built core modules for employee onboarding, attendance, leave management, payroll processing, role-based access, and reporting dashboards for HR teams.</li> */}
            <li>FIT-O-FIT Web App: Developed a complete gym management system covering customer enquiries, registrations, subscription plans with dynamic discount calculations, payments, expenses tracking, workout and diet plan creation, and live dashboards with charts.</li>
            <li>Migration Angular Framework: Successfully migrated the application from Angular 14 to Angular 19, ensuring compatibility, improved performance, and adoption of latest framework features while minimizing downtime.</li>
            <li>FIT-O-FIT Admin Mobile App (Ionic): Replicated FIT-O-FIT web features in a cross-platform mobile app in IONIC 8 for admins to manage members, plans, payments, and expenses on the go.</li>
            <li>FIT-O-FIT User Mobile App (Ionic): Created a user-facing mobile app for gym members to check personal details, payment status, due amounts, subscriptions, workout schedules, and diet plans.</li>
            <li>Retail Mobile App (Ionic): Designed and implemented modules for product catalog, QR code generation and printing, billing, approvals, wastage entry, production status tracking, and stock management for retail businesses.</li>
            <li>Integrated RESTful APIs and developed frontend web and mobile applications using JavaScript, JSON, and Ionic Framework.</li>
            <li>Used Android Studio, ADB, and Ionic CLI for building, debugging, and deploying apps across multiple devices.</li>
            <li>Experienced in web application development, REST concepts, and performing extensive frontend unit testing during development.</li>
            <li>Collaborated with UI/UX designers, backend developers, and testers to deliver user-friendly, high-performance solutions within deadlines.</li>
          </ul>

          <button className="btn toggle-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </motion.section>

      {/* Publications Section */}
      <motion.section id="publications" className="section publications-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Publications</h2>
        <div className="publication-card">
          <div className="publication-header">
            <h3>Frequency and Voltage Control of Multi-Area Multisource Power System Using Whale Optimization Algorithm (WOA)</h3>
          </div>
          
          <div className="publication-details">
            <div className="publication-meta">
              <div className="meta-item">
                <span className="meta-icon"><i className="fas fa-book"></i></span>
                <div>
                  <p className="meta-label">Publisher</p>
                  <p className="meta-value">Springer, Cham</p>
                </div>
              </div>
              <div className="meta-item">
                <span className="meta-icon"><i className="fas fa-calendar"></i></span>
                <div>
                  <p className="meta-label">Publication Date</p>
                  <p className="meta-value">May 29, 2024</p>
                </div>
              </div>
            </div>
          </div>

          <p className="publication-description">
            The stability of terminal voltage and nominal frequency in an interlinked power system (IPS) is a foremost challenge. The active and reactive power requirements are impacted by load fluctuations or other disturbances, which has a negative impact on how well IPS functions normally. In order to keep the terminal voltage and frequency at their recommended levels, Tie-line is used to connect the loops of the automatic voltage regulator (AVR) and load frequency control (LFC). This work presents a comprehensive analysis of frequency and voltage control mechanisms in multi-area power systems.
          </p>

          <a href="https://link.springer.com/chapter/10.1007/978-3-031-51167-7_12" target="_blank" rel="noreferrer" className="btn publication-link">
            <i className="fas fa-external-link-alt"></i>
            <span>View Publication</span>
          </a>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section id="certifications" className="section certifications-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <div className="certification-badge">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>Angular Course Completion</h3>
            <p className="cert-issuer">Self-Learning Course</p>
            <p className="cert-date">Valid from: May 2024 | Does not expire</p>
            <a href="https://drive.google.com/file/d/1rbXYAfTJncjOrKuzA8TFYOCkegkloTD3/view" target="_blank" rel="noreferrer" className="cert-link">
              <i className="fas fa-eye"></i> View Certificate
            </a>
          </div>

          <div className="certification-card">
            <div className="certification-badge">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>JavaScript Course Completion</h3>
            <p className="cert-issuer">Self-Learning Course</p>
            <p className="cert-date">Valid from: May 2024 | Does not expire</p>
            <a href="https://drive.google.com/file/d/1akrgi68L609TayNzWcRbZ8Fcl7mZQ87g/view" target="_blank" rel="noreferrer" className="cert-link">
              <i className="fas fa-eye"></i> View Certificate
            </a>
          </div>

          <div className="certification-card">
            <div className="certification-badge">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>100 Days of Code: The Complete Python Pro Bootcamp</h3>
            <p className="cert-issuer">Udemy</p>
            <p className="cert-date">Valid from: May 2023 | Does not expire</p>
            <a href="https://docs.google.com/presentation/d/1cSbcL7DUJj5OJVoFwD_UdQdeAwpbJ2sSjbDvpmZfXGQ/edit" target="_blank" rel="noreferrer" className="cert-link">
              <i className="fas fa-eye"></i> View Certificate
            </a>
          </div>

          <div className="certification-card">
            <div className="certification-badge">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>Power System Workshop & Technical Session</h3>
            <p className="cert-issuer">International & National Workshop</p>
            <p className="cert-date">Completion Certificate</p>
            <a href="https://www.udemy.com/certificate/UC-6b92c761-4e57-410c-a221-1da405fb7192/" target="_blank" rel="noreferrer" className="cert-link">
              <i className="fas fa-eye"></i> View Certificate
            </a>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section id="education" className="section education-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Education</h2>
        <div className="education-cards">
          <div className="education-card">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>B.Tech in EEE</h3>
            <p className="institution">AITAM</p>
            <p className="cgpa">CGPA: <strong>8.6</strong></p>
          </div>
          <div className="education-card">
            <div className="education-icon">
              <i className="fas fa-book"></i>
            </div>
            <h3>Intermediate (M.P.C)</h3>
            <p className="institution">Sathavahana Jr College</p>
            <p className="cgpa">CGPA: <strong>9.29</strong></p>
          </div>
          <div className="education-card">
            <div className="education-icon">
              <i className="fas fa-school"></i>
            </div>
            <h3>S.S.C</h3>
            <p className="institution">Narayana High School</p>
            <p className="cgpa">CGPA: <strong>8.8</strong></p>
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" className="section contact-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Contact Me</h2>

        <div className="contact-card">
          <p className="contact-intro">Let's connect and collaborate on amazing projects!</p>

          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <p>Email</p>
                <a href="mailto:udiyanajagadeesh@gmail.com" className="contact-link">udiyanajagadeesh@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <p>Phone</p>
                <a href="tel:+918374822732" className="contact-link">+91 83748 22732</a>
              </div>
            </div>
          </div>

          <div className="contact-buttons">
            <a href="https://wa.me/918374822732" target="_blank" rel="noreferrer" className="btn contact-btn whatsapp-btn">
              <i className="fab fa-whatsapp"></i>
              <span>Chat on WhatsApp</span>
            </a>
            <a href="https://www.linkedin.com/in/jagadeesh-udiyana-711019230" target="_blank" rel="noreferrer" className="btn contact-btn linkedin-btn">
              <i className="fab fa-linkedin"></i>
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer>
        <p>© 2025 Jagadeesh Udiyana | Built with ❤️ in React</p>
      </footer>
    </div>
  );
}

export default App;
