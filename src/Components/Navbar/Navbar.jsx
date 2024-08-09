import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/University.png'


const Navbar = () => {
  return (
    <nav className='container dark-nav'>

        <img src={logo} alt=''/>
        <ul>
      <li>
        <Link to="hero" smooth={true} offset={0} duration={500}>Home</Link>
      </li>
      <li>
        <Link to="program" smooth={true} offset={-260} duration={500}>Program</Link>
      </li>
      <li>
        <Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link>
      </li>
      <li>
        <Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link>
      </li>
      <li>
        <Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link>
      </li>
      <li>
        <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link>
      </li>
    </ul>
      
    </nav>
  )
}

export default Navbar
