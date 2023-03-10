import React,{useState} from 'react';
import "./Navbar.scss";
import {AiFillCloseCircle,AiOutlineTwitter,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {TbGridDots} from 'react-icons/tb';

const Navbar = () => {

  //  display the navbar
  const [active,setActive] = useState('menuDiv');

  const showNavBar = () => {
    setActive('menuDiv activeNavbar')
  }

  // remove the navbar

  const removeNavbar = () => {
    setActive('menuDiv')
  }

  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">Wonder</h3>
        </div>

        <div className={active}>
          <ul className="menuLists">
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Our Tours</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Gallery</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Contact Us</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Pages</a>
            </li>
          </ul>

          <div className="closeNavbar" onClick={removeNavbar}>
            <AiFillCloseCircle className='icon'/>
          </div>

        </div>

 
      <div className="socialIcons flex">
      <BsFacebook className='icon'/>
      <AiOutlineTwitter className='icon'/>
      <AiFillYoutube className='icon'/>
      <AiFillInstagram className='icon'/>
      </div>

      <div className="toggleNavbar" onClick={showNavBar}>
        <TbGridDots className='icon'/>
      </div>
      
      </div>

    

    </div>
  )
}

export default Navbar