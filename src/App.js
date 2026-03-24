import React, { useEffect, useRef } from "react";
import "./App.css";
import { motion } from "framer-motion";
import ExperienceSection from "./features/experience/ExperienceSection";
import HeroSection from "./features/hero/HeroSection";
import AboutSection from "./features/about/AboutSection";
import SkillsSection from "./features/skills/SkillsSection";
import PublicationsSection from "./features/publications/PublicationsSection";
import CarouselSection from "./features/carousel/CarouselSection";
import CertificationsSection from "./features/certifications/CertificationsSection";
import EducationSection from "./features/education/EducationSection";
import ContactSection from "./features/contact/ContactSection";
import { useMousePosition } from "./hooks/useCustomHooks";

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
  const appRefElement = useRef(null);
  const { mousePosition, setAppRef } = useMousePosition();

  useEffect(() => {
    if (appRefElement.current) {
      setAppRef(appRefElement.current);
    }
  }, [setAppRef]);

  // Parallax offset based on mouse position
  const parallaxX = (mousePosition.x - 0.5) * 20;
  const parallaxY = (mousePosition.y - 0.5) * 20;

  return (
    <div className="app" ref={appRefElement}>
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
      <HeroSection parallaxX={parallaxX} parallaxY={parallaxY} />

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Publications Section */}
      <PublicationsSection />

      {/* Image Carousel Section */}
      <CarouselSection images={images} />

      {/* Contact Section */}
      <ContactSection />

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
