import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Welcome to PW Skills</h1>
      <p>Learn skills to advance your career</p>
      <a href="/courses" className="cta">Explore Courses</a>
    </section>
  );
};

export default HeroSection;
