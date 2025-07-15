import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

export const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt='Logo' />
          <p>I am a Full Stack Web Developer</p>
        </div>

        {/* ✅ Web3Forms Footer Subscribe Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="footer-top-right"
        >
          <input type="hidden" name="access_key" value="52a0df4a-afc9-473b-8163-b9958456adad" />
          <input type="hidden" name="subject" value="New Subscriber from Portfolio Footer" />
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          <div className="footer-email-input">
            <img src={user_icon} alt='User Icon' />
            <input type='text' name='name' placeholder='Your Name (optional)' />
            <input type='email' name='email' placeholder='Enter Your Email' required />
          </div>

          <button type="submit" className="footer-subscribe">Subscribe</button>
        </form>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024. All Rights Reserved</p>

        <div className="footer-bottom-right">
          <a href="#" className="footer-link">Terms Of Services</a>
          <a href="#" className="footer-link">Privacy Policy</a>

          {/* ✅ Working Contact and Resume Links */}
          <a href="mailto:ak0297305@gmail.com" className="footer-link">Contact With Me</a>
          <a
            href="https://drive.google.com/uc?export=download&id=1jSlHUgRop1_NBaIpEUzGkYZJxpxgyARc"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            title="Download Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
