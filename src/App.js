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
          <p>Software Developer | Frontend (Angular, React, Ionic)</p>

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
      <motion.section id="about" className="section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>About Me</h2>
        <p>
          I’m a passionate Frontend Developer with <strong>2+ years of experience</strong> building responsive
          web and mobile applications using Angular, JavaScript, and Ionic. I’m currently expanding my skills
          in React, Next.js, and backend development (C#, Node.js) to grow as a Full Stack Developer.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section id="skills" className="section skills" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Technical Skills</h2>
        <div className="skill-cards">
          <div className="card">Frontend: Angular, React, Ionic, TypeScript, JavaScript, HTML, CSS</div>
          <div className="card">Backend: Node.js, C#, Python</div>
          <div className="card">Database: SQL (HackerRank 5⭐)</div>
          <div className="card">Tools: Git, VS Code, Postman, Android Studio</div>
        </div>
      </motion.section>

      {/* Experience */}
      {/* Experience Section */}
      <motion.section id="experience" className="section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Professional Experience</h2>
        <h3>Junior Software Developer – Experts in Solutions, Chennai (Aug 2023 – Present)</h3>

        {/* State controlled show/hide */}
        <p>
          <strong>Summary:</strong> Built responsive web & mobile apps using Angular and Ionic, improved app
          performance, and contributed to multiple full-stack projects.
        </p>

        <ul className={`exp-details ${showMore ? "show" : "hide"}`}>
          <li>HRMS: Built core modules for employee onboarding, attendance, leave management, payroll processing, role-based access, and reporting dashboards for HR teams.</li>
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
      </motion.section>

      {/* Education */}
      <motion.section id="education" className="section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Education</h2>
        <p>B.Tech in EEE – AITAM (CGPA 8.6)</p>
        <p>Intermediate (M.P.C) – Sathavahana Jr College (CGPA 9.29)</p>
        <p>S.S.C – Narayana High School (CGPA 8.8)</p>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" className="section contact" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Contact Me</h2>

        <p>Email: <a href="mailto:udiyanajagadeesh@gmail.com" className="contact-link">udiyanajagadeesh@gmail.com</a></p>
        <p>Phone: <a href="tel:+918374822732" className="contact-link">+91 83748 22732</a></p>

        <div className="contact-buttons">
          <a href="https://wa.me/918374822732" target="_blank" rel="noreferrer" className="btn whatsapp-btn">
            <i className="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/jagadeesh-udiyana-711019230" target="_blank" rel="noreferrer" className="btn linkedin-btn">
            <i className="fab fa-linkedin"></i> Connect on LinkedIn
          </a>
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
