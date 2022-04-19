import React, { useEffect, useState } from 'react';


const LoadStudentFeedbacks = () => {
 const [feedbacks, setFeedbacks] = useState([]);

 useEffect(() => {
  fetch('StudentFeedback.json')
   .then(res => res.json())
   .then(data => setFeedbacks(data))
 }, [])
 return [feedbacks]
}
export default LoadStudentFeedbacks;