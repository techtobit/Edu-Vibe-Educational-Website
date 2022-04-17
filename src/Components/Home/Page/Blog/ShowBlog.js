import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ShowBlog.css'

const ShowBlog = ({ blogData }) => {
 console.log(blogData);
 const { blogTitle
  , blogImg, blog, author, postDate } = blogData;
 return (
  <div className='blog-section grid grid-cols-2 gap-10 justify-center bg-white rounded-lg p-10   '>
   <div className="blog-img items-center">
    <img className='w-80 rounded-lg' src={blogImg} alt="" />
   </div>
   <div className="blog">
    <div className="blog-title">
     <h1 className="title text-xl font-semibold">{blogTitle}</h1>
     <div className="blog-auth-data flex items-center">
      <h2 className=' text-blue-600 rounded'>Author : {author}</h2>
      <div className="pl-5 ">
       <h2 className=' text-blue-600 '>Post Date : {postDate}</h2>
      </div>
     </div>
     <div className="blog-dis">{blog}</div>
     <div className="blog-btn pt-3">
      <button className="btn text-blue-600 hover:text-blue-400">Read More
       <FontAwesomeIcon className='pl-2' icon={faArrowRight}></FontAwesomeIcon>
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ShowBlog;