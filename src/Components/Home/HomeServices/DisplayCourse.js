import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DisplayCourse.css'

export const CourseContext = createContext('contexCourse');

const DisplayCourse = (props) => {
 // const { hadelCourseFutures } = props
 const { courseName, img, dis, price } = props.course;

 const navigate = useNavigate();

 const hadelCourseFutures = () => {
  navigate(`/services/${courseName}`)
 }

 const hadelAddToCart = () => {
  navigate(`/logIn`)
 }

 return (
  <CourseContext.Provider value={courseName}>
   <div className='course-section grid justify-center'>
    <img className='course-img' src={img} alt="" />
    <div className="course-info">
     <h1 className="course-title">{courseName}</h1>
     <p className="course-dis">{dis}</p>
     <h2 className="course-price">{price}</h2>
     <div className="course-btn flex items-center">
      <button className='course-cart-btn p-2 text-white' onClick={hadelAddToCart}>Add Cart</button>
      <div className="readMore pl-5">
       <button onClick={() => hadelCourseFutures(courseName)}>Read More</button>
       {/* <button onClick={() => props.hadelCourseFutures(props.course)}>Read More</button> */}
      </div>
     </div>
    </div>
   </div>
  </CourseContext.Provider>
 );
};

export default DisplayCourse;