import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Subscribe.css'
const Subscribe = () => {
 const url = "https://eduvibe.react.devsvibe.com/static/media/home-two-cta.73d10bc1e4f1217dd528.jpg";
 return (
  <div className="subscribe-container py-20">
   <div
    style={{
     backgroundImage:
      `url(${url})`,
     backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
     backgroundSize: 'cover', width: '100%',
     height: '450px', borderRadius: '10px', opacity: '0.9'
    }}
   >
    <div className='text-center grid justify-center justify-items-center p-5'>
     <div className="subscribe-title p-20">
      <p className='text-white font-semibold'>SUBSCRIBE NEWSLETTER</p>
      <h2 className="title text-4xl font-bold">
       Get Every Latest News
      </h2>
     </div>
     <div className="subscribe-filed  flex items-center justify-evenly
     justify-items-center bg-white rounded ">
      <div className="icon ">
       <FontAwesomeIcon className='mailIcon' icon={faEnvelope}></FontAwesomeIcon>
      </div>
      <input className='outline-0' type="email" placeholder='Enter your mail address' />
      <button className='p-3 text-white rounded '>Subscribe
       <FontAwesomeIcon className='pl-3' icon={faArrowRight}></FontAwesomeIcon>
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Subscribe;