import React, { useEffect } from 'react';
import "./Staff.scss";

import Aos from 'aos';
import 'aos/dist/aos.css';

// imported Images
import user2 from "../Assets/user2.jpeg";
import user3 from "../Assets/user3.webp";
import user5 from "../Assets/user5.webp";

const Staff = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='staff container section'>
      <div className="secContainer">
        <span className="secTitle">
          Different People - One Mission
        </span>

        <div className="staffContainer grid">
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user2} alt="" />
            </div>
            <span className="name">
              Nicle charmaine
            </span>
            <span className="jobTitle">
              CEO Wander
            </span>
            <span className="contact">
              +454 5456 6677
            </span>
          </div>
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user3} alt="" />
            </div>
            <span className="name">
              Mel Guptha
            </span>
            <span className="jobTitle">
              Softare Engineering
            </span>
            <span className="contact">
              +454 5456 90677
            </span>
          </div>
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user5} alt="" />
            </div>
            <span className="name">
              Necky
            </span>
            <span className="jobTitle">
              UI Developer
            </span>
            <span className="contact">
              +454 5456 6456
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staff