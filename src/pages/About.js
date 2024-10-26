// src/pages/About.js
import React from 'react';
import './About.css';
import profilePic from '../assets/apic.jpeg'

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <img src={profilePic} alt="Atharva Verma" className="about-image" />
        <div className="about-text">
          <p className="about-description">
          Hello! I’m Atharva Verma, a Computer Science student at Arizona State University, driven by a passion for transforming complex tech ideas into impactful projects. I’m always exploring cutting-edge technologies and developing applications to solve real-world challenges.

Join me on my journey as I learn, grow, and tackle meaningful problems through innovative solutions.</p>
          {/* <p className="about-description">
            My interests span across web development, AR/VR, and blockchain, and I’ve built hands-on experience in software engineering, app development, and cybersecurity. Whether I’m working on a mental health app, developing tools for blockchain platforms, or creating immersive AR/VR experiences, I’m driven by curiosity and a desire to make technology accessible and impactful.
          </p> */}
          {/* <p className="about-description">
            Outside of coding, I lead the TEDx Club at ASU, where I get to share and learn from incredible ideas. I believe in the power of technology to create positive change, and I’m excited about all the new things to learn and build on this journey!
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default About;

