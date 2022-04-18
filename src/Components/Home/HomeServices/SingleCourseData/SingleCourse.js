import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DisplayCourse, { CourseContext } from '../DisplayCourse';

const SingleCourse = () => {
 const useContextApi = useContext(useContextApi)
 // const { aboutCourse } = useParams(CourseContext)
 console.log(useContextApi);
 return (
  <div className='text-5xl'>
   {/* <h1>Data From Use Params  : {aboutCourse}</h1> */}
   <br />
   <h1>Data From useContext  : {useContextApi}</h1>
   <DisplayCourse></DisplayCourse>
  </div>
 );
};

export default SingleCourse;