import React, { useContext } from 'react';
import { CourseContext } from '../DisplayCourse';

const CourseFullViwe = () => {
 const getCourse = useContext(CourseContext)
 return (
  <div>
   {getCourse}
  </div>
 );
};

export default CourseFullViwe;