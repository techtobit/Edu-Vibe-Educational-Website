import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoadCourses from '../../Hooks/CoursesFetch/LoadCourses';
import DisplayCourse from './DisplayCourse';

const CourseServices = () => {
  const [getCourse] = LoadCourses();
  const navigate = useNavigate();

  // const hadelCourseFutures = () => {
  //   navigate(`/services/aboutCourse`)

  // }

  return (
    <div className='pt-5'>
      <h1 className='text-4xl text-center font-bold '>Latest Courses</h1>
      <div className='services-section grid grid-cols-3 justify-between justify-items-center p-5
  gap-10'>
        {
          getCourse.map(course => <DisplayCourse
            key={course.name}
            course={course}
            // hadelCourseFutures={hadelCourseFutures}
          ></DisplayCourse>)
        }
      </div>
    </div>
  );
};

export default CourseServices;