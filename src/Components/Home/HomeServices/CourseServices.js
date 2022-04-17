import React from 'react';
import { useParams } from 'react-router-dom';
import LoadCourses from '../../Hooks/CoursesFetch/LoadCourses';
import DisplayCourse from './DisplayCourse';

const CourseServices = () => {
  const [getCourse] = LoadCourses();

  return (
    <div className='pt-16'>
      <h1 className='text-4xl text-center font-bold p-5'>Latest Courses</h1>
      <div className='services-section grid grid-cols-3 justify-between justify-items-center pt-12
  gap-10'>

        {
          getCourse.map(course => <DisplayCourse
            key={course.name}
            course={course}
            // hadelCoureFutures={hadelCoureFutures}
          ></DisplayCourse>)
        }
      </div>
    </div>
  );
};

export default CourseServices;