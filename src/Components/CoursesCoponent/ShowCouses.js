import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ShowCouses = ({ hadelCourseFutures, course }) => {
 const { courseName, author, authorImg, img, dis, price, students, lesson, rateing } = course;
 const [user] = useAuthState(auth)

 const navigate = useNavigate();
 const hadelAddToCart = () => {
  if (!user) {
   navigate(`/login`)
  }
  else {
   navigate('/courses/aboutCourse')
  }

 }

 return (
  <div className='course-section justify-center '>
   <div className="course-img grid justify-center p-5 bg-slate-50 hover:bg-white shadow-md rounded">
    <img className='course-img hover:scale-105 delay-100 duration-200' src={img} alt="" />
    <div className="course-info">
     <div className="author-rate flex justify-between pt-5">
      <div className='flex items-center author-img'>
       <img className="img rounded" src={authorImg} alt="" />
       <h4 className='text-md pl-2'>{author}</h4>
      </div>
      <div className='flex items-center '>
       <FontAwesomeIcon className='text-yellow-400' icon={faStar} ></FontAwesomeIcon>
       <div className="pl-2">{rateing}</div>
      </div>
     </div>
     <h1 className="course-title text-xl pt-4  font-bold">{courseName}</h1>

     <p className="course-dis">{dis}</p>
     <div className="studen-lesson flex pt-3 pb-3">
      <div className="student flex items-center">
       <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
       <h2 className='pl-2'>{students} students</h2>
      </div>
      <div className="lesson flex items-center pl-4">
       <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
       <h2 className='pl-2'>{lesson} lessons</h2>
      </div>

     </div>
     <h2 className="course-price"></h2>
     <div className="course-btn flex items-center justify-between">
      <button className='course-cart-btn p-2 text-white rounded 
       font-bold' onClick={hadelAddToCart}>${price} USD</button>
      <div className="readMore">
       <button className=' font-bold p-2 border-blue-600 border-b-4 rounded 
        hover:text-blue-500' onClick={() => hadelCourseFutures()}>Read More</button>
       {/* <button onClick={() => props.hadelCourseFutures(props.course)}>Read More</button> */}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ShowCouses;