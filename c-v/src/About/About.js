import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div class="about__title">ABOUT MYSELF</div>
      <div class="about__text">
        <p>
          Front-End developer with experience in creating SPA using React, Redux,
          HTML, CSS, JS. My free time is dedicated to Codewars, Photoshop and
          becoming familiar with NodeJS. In the future I see myself as a Full
          Stack Developer. Ready to consider project work and full-time
          employment.
        </p>
      </div>
      <div class="about__hobby__title"> My hooby</div>
      <div class="about__hobby__list">1 2 3 4 5 6</div>
    </div>
  );
};

export default About;
