import React from 'react'
import './footer.css'
// import { FaFacebookSquare } from "react-icons/fa";
// import { AiOutlineFacebook } from "react-icons/ai";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ALEXIS</a>

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
        <a href="https://faceboock.com"><LuFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://x.com"><FaXTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alexis Lerch. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer