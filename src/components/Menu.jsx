import React, { useState } from 'react';
import { Link } from "react-scroll";
import '../Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="menu">
      <ul className={`menu__list ${isOpen ? 'menu__list--open' : 'hide'}`}>
        <ul className='ul-1'>
        <Link className="menu__item" to='home' duration={1000} smooth={true}>Home</Link>
        <Link className="menu__item" to='about' duration={1000} smooth={true}>About</Link>
        <Link className="menu__item" to='services' duration={1000} smooth={true}>Services</Link>
        <Link className="menu__item" to='portofolio' duration={1000} smooth={true}>Portofolio</Link>
        <Link className="menu__item" to='contact' duration={1000} smooth={true}>Contact</Link>
        </ul>
      </ul>
      <div className="menu__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Menu;