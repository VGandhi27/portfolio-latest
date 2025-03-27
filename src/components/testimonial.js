// components/Testimonials.js
'use client';
import React, { useState } from "react";
import testimonialsData from "../data/testimonial.json";
import "../app/style/testimonial.scss";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className=" min-h-[75vh] testimonial-section" style={{marginTop: '3rem'}}>
      <div className="testimonial-container">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div className="testimonial-header">
              <img src={testimonial.image} alt={testimonial.name} />
              <div className="info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </div>
            </div>
            <p className="testimonial-text">{testimonial.feedback}</p>
          </div>
        ))}
        <div className="dots">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
