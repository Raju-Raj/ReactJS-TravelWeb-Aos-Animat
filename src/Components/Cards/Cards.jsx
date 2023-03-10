import React, { useEffect } from 'react';
import './Cards.scss';

import Aos from 'aos';
import 'aos/dist/aos.css';

// imported images
import cardImage1 from '../Assets/cardImage1.jpeg';
import cardImage2 from '../Assets/cardImage2.jpeg';
import cardImage3 from '../Assets/cardImage3.jpeg';

// imported icon
import {AiOutlineSwapRight} from 'react-icons/ai';

const Cards = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div data-aos='fade-up' data-aos-duration='2000' className='cards'>
      <div className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage1} alt="" />
          </div>
          <h4 className="textDiv">
            Baloon Flight
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage2} alt="" />
          </div>
          <h4 className="textDiv">
            Beach Travels
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage3} alt="" />
          </div>
          <h4 className="textDiv">
            Mountain Tours
          </h4>
        </div>
      </div>

      <div className="spanText flex">
        Other Tours
        <AiOutlineSwapRight className='icon'/>
      </div>
    </div>
  )
}

export default Cards