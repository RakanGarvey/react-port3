import './App.css';
// import Header from './components/Header'
import { Link } from "react-scroll";
import Home from './components/Home'
import About from './components/About'
import Portofolio from './components/Portofolio'
import Contact from './components/Contact'
import brand1 from './images/brand1.jpg'
import brand2 from './images/brand2.jpg'
import brand3 from './images/brand3.png'
import brand4 from './images/brand4.jpg'
import brand5 from './images/brand5.jpg'
import logo from './images/logo.png'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

function App() {
  return (
    <div className="container">
      {/* <Header /> */}
      <Home id='home'/>
      <div className="our-clients">
        <div>
          <h2>Our clients</h2>
          <div className="underline1"></div>
        </div>
        <div className="brand-imgs">
        <img src={brand1} alt="" className='brand'/>
        <img src={brand2} alt="" className='brand brand2'/>
        <img src={brand3} alt="" className='brand'/>
        <img src={brand4} alt="" className='brand brand4'/>
        <img src={brand5} alt="" className='brand brand5'/>
        </div>
      </div>
      <About id='about'/>
      <Portofolio id='portofolio'/>
      <Contact id='contact'/>
      <footer>
        <div className="ul1">
        <ul className='ul0'>
            <Link className='li' to='home' duration={1000} smooth={true}>Home</Link>
            <Link className='li' to='about' duration={1000} smooth={true}>About</Link>
            <Link className='li' to='services' duration={1000} smooth={true}>Services</Link>
            <Link className='li' to='portofolio' duration={1000} smooth={true}>Portofolio</Link>
            <Link className='li' to='contact' duration={1000} smooth={true}>Contact</Link>
        </ul>
        </div>
        <div className='last'>
          <img src={logo} alt="" className='logo logo1'/>
          <div className="icon-btn">
            <AiFillInstagram className='icon-btn'/>
            <AiFillFacebook className='icon-btn'/>
          </div>
          <p className="copyright">Copyright © 2023 Srtivefitstudio, All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
