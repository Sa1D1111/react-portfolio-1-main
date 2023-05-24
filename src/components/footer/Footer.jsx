import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sal Delgado</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://github.com/Sa1D1111" target="_blank"><FaGithub/></a>
      <a href="https://www.linkedin.com/in/saldelgado1/" target="_blank"><BsLinkedin/></a>
      <a href="https://twitter.com/SalDev1111"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SD All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer