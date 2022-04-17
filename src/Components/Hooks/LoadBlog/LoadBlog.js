import React, { useEffect, useState } from 'react';

const LoadBlog = () => {
 const [blog, setBlog] = useState([])

 useEffect( () => {
  fetch("Blog.json")
  .then(res => res.json())
  .then(data => setBlog(data))
 },[])
 return [blog,setBlog]
};

export default LoadBlog;