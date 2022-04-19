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
		// navigate(`/courses/aboutCourse`)
	}

	return (
		<>
			<div className='pt-5'>
				<div className="category-head grid py-10 pl-24">
					<p className="head-o text-blue-500 font-semibold">TRANDING</p>
					<h2 className="head-tile text-4xl font-bold">Most Popular Courses</h2>
				</div>
				<div className='services-section grid grid-cols-3
        justify-between justify-items-center p-5 gap-10'>
					{
						getCourse.slice(1, 7).map(course => <DisplayCourse
							key={course.price}
							course={course}
							hadelCourseFutures={hadelCourseFutures}
						></DisplayCourse>)
					}
				</div>

			</div>
		</>
	);
};

export default CourseServices;
