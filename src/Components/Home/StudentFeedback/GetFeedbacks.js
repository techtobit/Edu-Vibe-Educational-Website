import React from 'react';
import LoadStudentFeedbacks from '../../Hooks/LoadStudentFeedbacks/LoadStudentFeedbacks';
import StudentFeedback from './StudentFeedback';
const GetFeedbacks = () => {
 const [feedbacks] = LoadStudentFeedbacks();

 return (
  <div>
   <div className="category-head grid py-20 pl-32">
    <p className="head-o text-blue-500 font-semibold">TESTIMONIALS</p>
    <h2 className="head-tile text-4xl font-bold">Students Feedback</h2>
   </div>
   <div className='grid gap-10 grid-cols-2 py-1'>
    {
     feedbacks.map(feedback => <StudentFeedback
      key={feedback.person}
      feedback={feedback}
     ></StudentFeedback>
     )
    }
   </div>
  </div>
 );
};

export default GetFeedbacks;