import React from 'react'
import { Link } from "react-scroll";

const List = () => {
  return (
    <ul>
              <li>
              <Link className='li' to='home' duration={1000} smooth={true}>Home</Link>
              </li>
              <li>
              <Link className='li' to='about' duration={1000} smooth={true}>About</Link>
              </li>
              <li>
              <Link className='li' to='services' duration={1000} smooth={true}>Services</Link>
              </li>
              <li>
              <Link className='li' to='portofolio' duration={1000} smooth={true}>Portofolio</Link>
              </li>
              <li>
              <Link className='li' to='contact' duration={1000} smooth={true}>Contact</Link>
              </li>
    </ul>
  )
}

export default List