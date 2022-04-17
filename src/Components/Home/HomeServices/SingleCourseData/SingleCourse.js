import React from 'react';
import { useParams } from 'react-router-dom';

const SingleCourse = () => {
 const { aboutCourse } = useParams()

 // console.log(aboutCourse);

 return (
  <div>
   <h1>all About {aboutCourse}</h1>
   {/* {
    getCourse.map(course => console.log(course))
   } */}
  </div>
 );
};

export default SingleCourse;