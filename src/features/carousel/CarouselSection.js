import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "./CarouselSection.css";

const CarouselSection = ({ images }) => {
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
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="carousel-slide">
              <motion.img src={src} alt={`img-${i}`} className="carousel-img" />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
};

export default CarouselSection;
