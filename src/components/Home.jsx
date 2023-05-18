import React from 'react'
import Header from './Header'


const Home = () => {
  return (
    <div className='header'>
      <Header />
        <div className="home">
            <h1>STIVEFIT <br />STUDIO</h1>
            <div className="underline"></div>
            <button className="contact-btn">Contact Us</button>
        </div>
    </div>
  )
}

export default Home