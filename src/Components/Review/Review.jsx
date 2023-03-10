import React,{useEffect} from 'react';
import "./Review.scss";

import Aos from 'aos';
import 'aos/dist/aos.css';

// import images
import user1 from "../Assets/user1.jpeg";
import user2 from "../Assets/user2.jpeg";
import user3 from "../Assets/user3.webp";


const Review = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='review section'>
      <div className="secContainer">
        <span className="secTitle">
          What People Say
        </span>
        <div  className="reviewContainer container grid">

          <div data-aos='fade-up' data-aos-duration='3000' className="singleReview">
            <div className="imgDiv">
              <img src={user1} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit temporibus ratione quo ea delectus quis itaque excepturi facere vero?
            </p>

            <div className="name">
              Nicole Webb
            </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='3500' className="singleReview">
            <div className="imgDiv">
              <img src={user2} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit temporibus ratione quo ea delectus quis itaque excepturi facere vero?
            </p>

            <div className="name">
              Robert 
            </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='4000' className="singleReview">
            <div className="imgDiv">
              <img src={user3} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit temporibus ratione quo ea delectus quis itaque excepturi facere vero?
            </p>

            <div className="name">
              Lidney Josline
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Review