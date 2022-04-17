import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadCourses from '../../Hooks/CoursesFetch/LoadCourses';
import './DisplayCourse.css'

const DisplayCourse = ({ course }) => {
 const { courseName, img, dis, price } = course;

 const navigate = useNavigate();
 const hadelCourseFutures = () => {
  navigate(`/services/${course}`)

 }

 return (
  <div className='course-section pt-10'>
   <img className='course-img' src={img} alt="" />
   <div className="course-info">
    <h1 className="course-title">{courseName}</h1>
    <p className="course-dis">{dis}</p>
    <h2 className="course-price">{price}</h2>
    <button onClick={() => hadelCourseFutures(course)}>Read More</button>
   </div>
  </div>
 );
};

export default DisplayCourse;