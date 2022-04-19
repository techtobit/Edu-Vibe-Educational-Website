import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import course1 from '../../Assets/course-01.jpg'
import './StudentFeedback.css'


//react router carousel
const StudentFeedback = ({ feedback }) => {
  const { person, avatar, job, comment } = feedback
  return (
    <div className='feedback justify-center rounded-lg grid justify-self-center bg-slate-100 p-5'>
      <div className="comment-person flex items-center">
        <div className="person-avtar ">
          <img src={avatar} alt="" />
        </div>
        <div className="person-info pl-5">
          <div className="person-info font-bold text-lg">{person}</div>
          <div className="person-job font-normal text-blue-600">{job}</div>
        </div>
      </div>
      <div className="comments">
        <h2>{comment}</h2>
      </div>


      {/* 
   <Carousel className=''>
    <div className=' '>
     <div className="person-avatar">
      <img src={avatar} alt="" />
      <div className="person-info">{person}</div>
      <div className="person-job">{job}</div>
     </div>
     <p className="legend">Legend 1</p>
    </div>
    <div>
     <img src={course1} />
     <p className="legend">Legend 2</p>
    </div>
    <div>
     <img src={course1} />
     <p className="legend">Legend 3</p>
    </div>
   </Carousel> */}

    </div>
  );
};

export default StudentFeedback;


