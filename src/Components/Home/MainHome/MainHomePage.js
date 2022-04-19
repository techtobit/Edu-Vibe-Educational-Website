import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import homeBanner from '../../Assets/banner-04.png'
import CourseServices from '../HomeServices/CourseServices';
import './MainHomePage.css'
import { Link } from 'react-router-dom';
import HomeCatagory from '../TopCatagory/HomeCatagory';
import GetFeedbacks from '../StudentFeedback/GetFeedbacks';
import Subscribe from '../Subscribe/Subscribe';


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
            Learning to code not only allows you to give
            machines instructions, but it also teaches you
            abstract thinking and problem-solving. In fact,
            problem-solving skills and creativity
            are key to becoming a successful computer programmer
          </p>
          <div className="main-btns flex pl-0 p-10 justify-spacebetwn">
            <button className="explore text-white font-bold w-40 h-14 rounded ">
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
      <div className='p-10'>
        <div className="see-all-course grid justify-center  ">
          <Link to='/courses' className='bg-blue-500 font-bold hover:bg-blue-600 text-white
            p-3 text-bold font-xl rounded'>See All Course
            <FontAwesomeIcon icon={faArrowRight} className='pl-2'></FontAwesomeIcon>
          </Link>
        </div>
      </div>

      <HomeCatagory></HomeCatagory>

      {/* <StudentFeedback></StudentFeedback> */}
      <GetFeedbacks></GetFeedbacks>

      <Subscribe></Subscribe>

    </>
  );
};

export default HomeBanner;