import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadCourses from '../../Hooks/CoursesFetch/LoadCourses';
import DisplayCourse from './DisplayCourse';


const CourseServices = () => {
  const [getCourse] = LoadCourses();

  const navigate = useNavigate();
  
  const hadelCourseFutures = () => {
    navigate(`/courses/aboutCourse`)
  }

  return (
    <>
      <div className='pt-5'>
        <h1 className='text-4xl text-center font-bold '>Latest Courses</h1>
        <div className='services-section grid grid-cols-3 justify-between justify-items-center p-5
  gap-10'>
          {
            getCourse.map(course => <DisplayCourse
              key={course.price}
              course={course}
              hadelCourseFutures={hadelCourseFutures}
            ></DisplayCourse>)
          }
        </div>
        <div className="see-all-course grid justify-center  ">
          <Link to='/courses' className='bg-blue-600 text-white
            p-3 text-bold font-xl rounded-sm'>See All Course
            <FontAwesomeIcon icon={faArrowRight} className='pl-2'></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CourseServices;
