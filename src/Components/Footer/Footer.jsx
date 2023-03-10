import React, { useEffect } from 'react';
import "./Footer.scss";

import Aos from 'aos';
import 'aos/dist/aos.css';

// import Icons
import { HiPhone } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaLocationArrow } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='footer'>
      <div className="secContainer container">
        <div className="content grid">

          <div data-aos='fade-up' data-aos-duration='2000' className="row">
            <div className="spanText">
              Contact Us
            </div>
            <div className="contactDiv">
              <span className="flex">
                <HiPhone className='icon'/>
                <span>+244 334 556 67</span>
              </span>
              <span className="flex">
                <MdEmail className='icon'/>
                <span>genefier@gmail.com</span>
              </span>
              <span className="flex">
                <FaLocationArrow className='icon'/>
                <span>+244 334 556 67</span>
              </span>

            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000' className="row">
            <div className="spanText">
              Popular News
            </div>

          <div className="singleNews">
            <span className="text">
              Your Personal Guide to most places to visit in the world
            </span>
            <p>
              Jan 04, 2023
            </p>
          </div>

          <div className="singleNews">
            <span className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quisqua.
            </span>
            <p>
              Jan 20, 2023
            </p>
          </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='2000' className="row">
            <div className="spanText">
              Quick Links
            </div>

            <div className="footerLinks">
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="bottomDiv flex">
          <p>Copyright 2023 Traveltech - all rights reserved</p>

          <div className="social flex">
            <FaFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>

          <p>Privacy Ploicy</p>

        </div>

      </div>
    </div>
  )
}

export default Footer