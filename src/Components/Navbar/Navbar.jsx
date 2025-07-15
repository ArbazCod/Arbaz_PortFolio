import React, { useState } from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg'; 
import underline from '../../assets/nav_underline.svg'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSetMenu = (value) => {
    setMenu(value);
    closeMenu(); // Automatically close menu on click (mobile)
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <img src={menu_open} onClick={toggleMenu} alt="menu" className="nav-mob-open" />

      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <img src={menu_close} onClick={toggleMenu} alt="close" className="nav-mob-close" />
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => handleSetMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleSetMenu("about-me")}>About me</p>
          </AnchorLink>
          {menu === "about-me" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#Services'>
            <p onClick={() => handleSetMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#Portfolio'>
            <p onClick={() => handleSetMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#Contact'>
            <p onClick={() => handleSetMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      <div className="nav-contact">
        <AnchorLink className='anchor-link' offset={50} href='#Contact'>CONTACT WITH ME</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
