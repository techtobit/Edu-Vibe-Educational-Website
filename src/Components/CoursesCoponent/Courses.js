import React from 'react';
import LoadCourses from '../Hooks/CoursesFetch/LoadCourses';
import ShowCouses from './ShowCouses';

const Courses = () => {
  const [getCourse] = LoadCourses();
  return (
    <div className='pt-5'>
      <h1 className='text-4xl text-center font-bold '>Latest Courses</h1>
      <div className='services-section grid grid-cols-3 justify-between justify-items-center p-5
    gap-10'>
        {
          getCourse.map(course => <ShowCouses
            key={course.price}
            course={course}
          ></ShowCouses>)
        }
      </div>
    </div>

  );
};

export default Courses;