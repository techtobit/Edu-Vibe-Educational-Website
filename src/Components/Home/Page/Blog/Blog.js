import React from 'react';
import LoadBlog from '../../../Hooks/LoadBlog/LoadBlog';
import ShowBlog from './ShowBlog';

const Blog = () => {
 const [blog, setBlog] = LoadBlog();
 return (
  <div className='grid gap-10 justify-items-center pt-15 pb-10' >
   {
    blog.map(data => <ShowBlog key={data.img}
     blogData={data}
    ></ShowBlog>)
   }
  </div>
 );
};

export default Blog;