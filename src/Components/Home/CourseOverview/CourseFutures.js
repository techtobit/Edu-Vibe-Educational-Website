import { useParams } from 'react-router-dom';
import LoadCourses from '../../Hooks/CoursesFetch/LoadCourses';


const CourseFutures = () => {
 const [getCourse] = LoadCourses();
 
 return (
  <>
   <div>

   </div>
  </>
 );
};

export default CourseFutures;