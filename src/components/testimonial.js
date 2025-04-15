'use client';
import React, { useState, useEffect } from "react";
import testimonialsData from "../data/testimonial.json";
import "../app/style/testimonial.scss";
import Image from 'next/image';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="min-h-[80vh] testimonial-section">
      <h2 className="testimonial-title" style={{marginTop:'3rem'}}>
        Kind Words From My <span>Colleagues/Satisfied Clients</span>
      </h2>

      <div className="testimonial-slider">
        <div
          className="testimonial-track"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div className="testimonial-card">
                <p className="testimonial-text">&apos;{testimonial.feedback}&apos;</p>
                <div className="testimonial-header">
                  <Image src={testimonial.image} alt={testimonial.name} />
                  <div className="info">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dots">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
