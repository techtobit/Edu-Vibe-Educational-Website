import React, { useEffect, useState } from 'react';

const LoadCourses = () => {
 const [getCourse, setCoures] = useState([]);

 useEffect( () => {
  fetch('CourseServices.json')
  .then(res => res.json())
  .then(data => setCoures(data))
 },[])
return[getCourse, setCoures]
};

export default LoadCourses;