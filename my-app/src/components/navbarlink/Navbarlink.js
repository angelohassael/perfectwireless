import * as ai from "react-icons/ai"
import * as im from "react-icons/im"
import './Navbarlink.css';
import React, { useState, useEffect } from 'react';
import logo from '../../img/Logo.png'
import {Link} from 'react-router-dom';

function Navbar() {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () => {
 if (window.innerWidth <= 960) {
    setButton(false);
 } else {
    setButton(true);
 }
};
useEffect(() => {
showButton();
}, []);

window.addEventListener('resize', showButton);
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
        <Link to='/' className='navbar-logo-container'>
            <img src={logo} alt="" className='navbar-logo'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            {click ? <im.ImCross/> : <ai.AiOutlineMenu/>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' smooth={true} duration={100} spy={true} offset={-120} className='nav-links' onClick={closeMobileMenu}>
              Home
              </Link>
            </li>
            <li className='nav-item'>
            <Link to='/contactus' smooth={true} duration={100} spy={true} offset={-120} className='nav-links' onClick={closeMobileMenu}>
              Contact Us
              </Link>
            </li>
            <li className='nav-item'>
            <Link to='/aboutus' smooth={true} duration={100} spy={true} offset={-120} className='nav-links' onClick={closeMobileMenu}>
              About Us
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;