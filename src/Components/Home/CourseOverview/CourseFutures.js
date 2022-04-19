import { useParams } from 'react-router-dom';
import LoadCourses from '../../Hooks/CoursesFetch/LoadCourses';


const CourseFutures = () => {
 const [getCourse] = LoadCourses();
 
 const courses = useParams()
 console.log(courses);

 return (
  <>
   <div>
    <h1 className='text-5xl text-center text-red-600'>Course Futures</h1>
    <h3 className='text-5xl text-center text-green-600'> </h3>
   </div>
  </>
 );
};

export default CourseFutures;