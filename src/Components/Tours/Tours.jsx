import React, { useEffect } from 'react';
import './Tours.scss';

import Aos from 'aos';
import 'aos/dist/aos.css';

// imported images;
import tourImage1 from "../Assets/image1.jpeg";
import tourImage2 from "../Assets/image2.jpeg";
// Imported Icons
import {AiFillStar} from 'react-icons/ai'

const Tours = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='tours container section'>
      <div className="secContainer">
        <span className="secTitle">
          Hot Tours
        </span>

        <div className="tourContainer">

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage1} alt="" />
            </div>
            <div data-aos='fade-up' data-aos-duration='3000' className="tourInfo">
              <span className="tourTitle">
                Spain, Benidorm
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>
                <small className='custReview'>
                  2 Customer review
                </small>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit? Ullam eius autem asperiores corrupti. Ratione voluptates a, perspiciatis quis labore dolorem recusandae odio sapiente assumenda. Qui nobis labore voluptate!
              </p>
              <button className='btn'>Buy This Tour</button>
            </div>
            <span className='price'>
              $790
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='3000' className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage2} alt="" />
            </div>
            <div data-aos='fade-up' data-aos-duration='3500' className="tourInfo">
              <span className="tourTitle">
                Bogatha Waterfalls, India
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>
                <small className='custReview'>
                  5 Customer review
                </small>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit? Ullam eius autem asperiores corrupti. Ratione voluptates a, perspiciatis quis labore dolorem recusandae odio sapiente assumenda. Qui nobis labore voluptate!
              </p>
              <button className='btn'>Buy This Tour</button>
            </div>
            <span className='price'>
              $650
            </span>
          </div>

          
        </div>

      </div>
    </div>
  )
}

export default Tours