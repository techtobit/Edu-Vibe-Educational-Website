import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import homeBanner from '../../Assets/banner-04.png'
import CourseServices from '../HomeServices/CourseServices';
import './HomeBanner.css'

const HomeBanner = () => {
 return (
  <>
   <div className='home-section grid grid-cols-2 justify-center items-center pt-4'>
    <div className="home-title grid pl-10">
     <h1 className="main-title text-6xl font-bold">
      Education Is A Path
      <br />
      To Success In Life
     </h1>
     <p className="main-dis min-w-min pl-0 p-5">
      Sed eu volutpat arcu, a tincidunt nulla quam,
      <br />
      feugiat sit amet ipsum a, dapibus porta velit.
     </p>
     <div className="main-btns flex pl-0 p-10 justify-spacebetwn">
      <button className="explore text-white font-bold w-40 h-14 ">
       Get Start
       <FontAwesomeIcon icon={faArrowRight} className='pl-2'></FontAwesomeIcon>
      </button>
      <div className="watch-btn pl-10 flex items-center justify-items-center ">
       <button className="watch-video flex items-center  justify-items-center  ">
        <div className='play-btn '>
         <FontAwesomeIcon icon={faCirclePlay} className='play-icon'></FontAwesomeIcon>
        </div>
        <p className='font-bold pl-3'>Watch Video</p>
       </button>
      </div>
     </div>
    </div>
    <div className="home-banner">
     <img className='pl-4' src={homeBanner} alt="" />
    </div>

   </div>
   <CourseServices></CourseServices>
  </>
 );
};

export default HomeBanner;