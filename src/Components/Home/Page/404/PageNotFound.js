import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NotFound from '../../../Assets/404.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
 return (
  <div className='404 relative'>
   <div className="">
    <div style={{
     backgroundImage:
      `url(${NotFound})`,
     backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
     backgroundSize: 'cover', width: '100%',
     height: '100vh'
    }}>
    </div>
    <div className='back-btn absolute top-1/3 left-2/4 flex justify-center '>
     <div className=" bg-blue-600 p-2 text-white font-bold text-xl shadow-lg  shadow-slate-100 rounded-xl">
      <Link to='/home' className="back-to-home "> Back To Home
       <FontAwesomeIcon className='pl-2' icon={faArrowRight}></FontAwesomeIcon>
      </Link></div>
    </div>
   </div>
  </div>
 );
};

export default PageNotFound;