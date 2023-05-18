import React from 'react'
import Menu from './Menu'
import { Link } from "react-scroll";
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className='home1'>
        <img src={logo} alt="" className='logo'/>
        <ul className='ul0'>
            <Link className='li' to='home' duration={1000} smooth={true}>Home</Link>
            <Link className='li' to='about' duration={1000} smooth={true}>About</Link>
            <Link className='li' to='services' duration={1000} smooth={true}>Services</Link>
            <Link className='li' to='portofolio' duration={1000} smooth={true}>Portofolio</Link>
            <Link className='li' to='contact' duration={1000} smooth={true}>Contact</Link>
        </ul>
        <Menu />
    </div>
  )
}

export default Header