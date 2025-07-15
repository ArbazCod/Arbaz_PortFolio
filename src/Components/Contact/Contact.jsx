import React from 'react';
import "./Contact.css";
import theme_pattern from '../../assets/theme_pattern.svg';
import location_icon from '../../assets/location_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div id='Contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt='' />
      </div>

      <div className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            "I’m open to new opportunities and would love to collaborate on
            upcoming projects. Feel free to reach out!"
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={location_icon} alt='' />
              <p>Purulia, West Bengal</p>
            </div>
            <div className="contact-detail">
              <img src={mail_icon} alt='' />
              <p>ak0297305@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt='' />
              <p>7001631034</p>
            </div>
          </div>
        </div>

        {/* Right Section: Web3Forms */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-right"
        >
          {/* Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="52a0df4a-afc9-473b-8163-b9958456adad"
          />

          {/* Optional Subject */}
          <input
            type="hidden"
            name="subject"
            value="New Message from Portfolio Contact Form"
          />

          {/* Optional Redirect after submission */}
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />

          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            id="name"
            required
          />

          <label htmlFor="email">Your Mail</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="8"
            placeholder="Enter Your Message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;























 