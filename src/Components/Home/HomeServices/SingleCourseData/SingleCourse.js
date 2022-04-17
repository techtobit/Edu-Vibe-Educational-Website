import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../DisplayCourse';

const SingleCourse = () => {
 const contexCourse = useContext(CourseContext)
 const { aboutCourse } = useParams(CourseContext)
 return (
  <div className='text-5xl'>
   <h1>Data From Use Params  : {aboutCourse}</h1>
   <br />
   <h1>Data From useContext  : {contexCourse}</h1>

  </div>
 );
};

export default SingleCourse;