
import React from 'react';
import './Hero.css';
import profile_img from '../../assets/20171123_095403.jpg';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Arbaz Khan" />
      <h1><span>Arbaz Khan </span>| Full Stack Web Developer</h1>
      <p>
        A passionate Full Stack Web Developer from Purulia, West Bengal, 
        with expertise in building dynamic and responsive web applications. 
        I love turning ideas into reality through clean, efficient code 
        and intuitive user experiences.
      </p>
      <div className="hero-action">
   <a
 href="https://mail.google.com/mail/?view=cm&fs=1&to=rohitcod50@gmail.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="hero-connect"
>
  Connect with Me
</a>

    <a
  href="https://arbazkhan725.github.io/Arbaz-khan786/resume.pdf?v=2"
  className="hero-connect"
  target="_blank"
  rel="noopener noreferrer"
  download="resume.pdf"
  aria-label="Open Arbaz Khan's Resume (PDF)"
>
  My Resume
</a>


      </div>
    </div>
  );
};

export default Hero;
