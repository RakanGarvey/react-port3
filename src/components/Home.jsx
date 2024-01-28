import React from 'react'
import Header from './Header'
import { Link } from 'react-scroll'
import Section from '../Section'


const Home = () => {
  return (
    <Section>
      <div className='header'>
      <Header />
        <Section>
          <div className="home">
            <h1>STIVEFIT <br />STUDIO</h1>
            <div className="underline"></div>
            <Link className="contact-btn" to='contact' duration={2500} smooth={true}>
              Contact Us
            </Link>

        </div>
        </Section>
      </div>
    </Section>
  )
}

export default Home