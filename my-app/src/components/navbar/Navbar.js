import * as ai from "react-icons/ai"
import * as im from "react-icons/im"
import './Navbar.css';
import React, { useState, useEffect } from 'react';
import logo from '../../img/Logo.png'
import { 
        Link
       } from 'react-router-dom';
       import {Link as LinkScroll} from 'react-scroll'


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
              <LinkScroll to='repair-container' smooth={true} duration={100} spy={true} offset={-120} className='nav-links' onClick={closeMobileMenu}>
              Repairs
              </LinkScroll>
            </li>
            <li className='nav-item'>
              <LinkScroll to='transfer-container' smooth={true} duration={100} spy={true} offset={-120} className='nav-links' onClick={closeMobileMenu}>
              Money Transfer
              </LinkScroll>
            </li>
            <li className='nav-item'>
              <LinkScroll to='accessories-container' smooth={true} duration={100} spy={true} offset={-100} className='nav-links' onClick={closeMobileMenu}>
              Accessories
              </LinkScroll>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;