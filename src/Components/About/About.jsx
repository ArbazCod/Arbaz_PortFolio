import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import coders from '../../assets/coders.webp';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        {/* Left: Profile Picture */}
        <div className="about-left">
          <img src={coders} alt="Profile" />
        </div>

        {/* Right: Bio and Skills */}
        <div className="about-right">
          <div className="about-para">
            <p>
           Hi, I'm Arbaz Khan — a passionate and self-driven Full Stack Web Developer with a strong foundation in both front-end and back-end technologies.
           <hr></hr>
I hold a B.Tech in Mechanical Engineering from Bengal College of Engineering and Technology (affiliated with MAKAUT), with a CGPA of 7.58. Prior to that, I completed a Diploma in Mechanical Engineering, which gave me a solid technical base.
<hr></hr>

My technical skillset includes HTML, CSS, JavaScript, React, Node.js, MongoDB, and SQL. I approach every project with an analytical and problem-solving mindset, and I’m always eager to explore new technologies to improve my craft.
<hr></hr>
I’m driven by a passion to contribute to meaningful projects, collaborate with dynamic teams, and bring ideas to life through clean, efficient code. I believe in hard work, smart execution, and clear communication.

Let’s build something amazing together!
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>NODE JS</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>Java Script</p>
              <hr style={{ width: '50%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievments">
        <div className="about-achievment">
          <h1>1 +</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>10 +</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>5 +</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
