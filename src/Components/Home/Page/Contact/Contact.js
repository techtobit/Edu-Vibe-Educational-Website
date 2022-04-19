import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import contactPerson from '../../../Assets/contact-1.jpg'
import WhatsApp from '../../../Assets/whatsapp.png'
import House from '../../../Assets/house.png'
import Linkedin from '../../../Assets/linkedin.png'
import './Contact.css'

const Contact = () => {
 return (
  <div className='contact-section pt-10 pb-10'>

   <div className="section-titel pl-32">
    <h1 className='text-5xl font-bold'>Contact Me</h1>
   </div>
   <div className="contact  grid grid-cols-2 justify-center items-center ">
    <div className="contact-person ">
     <div className="grid justify-items-center contact-bg relative ">
      <div style={{
       backgroundImage:
        `url(${contactPerson})`,
       backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
       backgroundSize: 'cover', width: '450px',
       height: '480px', borderRadius: '10px', opacity: '0.7'
      }} >
      </div>
      <div className="content-overlay absolute bottom-6">
       <h4 className='text-white font-bold text-3xl'>
        Don’t Be Hesitate To
        <br />
        Contact With US
       </h4>
      </div>

     </div>


     {/* <img className='w-80' src={contactPerson} alt="" /> */}
    </div>
    <div className="contac-from">
     <div className="form-header pt-5 pb-20">
      <p className='text-blue-500 text-2xl'>Contact Me</p>
      <h2 className='text-4xl font-bold'>Sent Me a Massage</h2>
     </div>
     <form className=''>
      <div className="input-div pb-4 flex">
       <input className=' border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' type='text' placeholder="Name*" />
       <div className='pl-5'>
        <input className=' border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' type='email' placeholder="Email*" />
       </div>
      </div>
      <div className="input-div pb-3">
       <input className='w-2/3 border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' id='password' type="password" placeholder="Subject" />
      </div>
      <div className="input-div pb-3">
       <textarea className='w-2/3 h-max border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' id='password' type="textarea" placeholder="comment" />
      </div>
      <button className='w-30 bg-blue-600 hover:bg-blue-700 border-blue-400 text-center border-solid rounded border  text-xl font-medium p-2  text-white '>Submit Now
       <FontAwesomeIcon className='pl-2' icon={faArrowRight}></FontAwesomeIcon>
      </button>
     </form>
    </div>

   </div>
   <div className="all-locations pt-20">
    <div className="my-location text-center pb-10">
     <h4 className='text-blue-500 text-2xl pt-2 pb-2'>LOCATIONS</h4>
     <h2 className=' text-4xl font-bold'>My Offices Locations</h2>
    </div>
    <div className="contact-location grid grid-cols-3 justify-items-center gap-5">
     <div className="phone grid justify-center justify-items-center bg-white shadow-slate-100 rounded-lg w-80 hover:scale-105 delay-50 duration-100">
      <div className='pt-3'>
       <img className='' src={WhatsApp} alt="" />
      </div>
      <div className='pt-3'>
       <h2 className='text-2xl font-bold'>Contact</h2>
      </div>
      <div className='pb-3 pt-2'>
       <p>Mobile : (+880)17xxxxxxxx</p>
       <p>HotLine : 93325-405</p>
      </div>

     </div>
     <div className="phone grid justify-center justify-items-center bg-white shadow-slate-100 rounded-lg w-80 hover:scale-105 delay-50 duration-100">
      <div className='pt-3'>
       <img className='' src={House} alt="" />
      </div>
      <div className='pt-3'>
       <h2 className='text-2xl font-bold'>Address</h2>
      </div>
      <div className='pb-3 pt-2'>
       <p>140 No Road,NewMarket</p>
       <p>Chittagong,Bangladesh</p>
      </div>
     </div>

     <div className="phone grid justify-center justify-items-center bg-white shadow-slate-100 rounded-lg w-80 hover:scale-105 delay-50 duration-100">
      <div className='pt-3'>
       <img className='' src={Linkedin} alt="" />
      </div>
      <div className='pt-3'>
       <h2 className='text-2xl font-bold'>Appointment</h2>
      </div>
      <div className='pb-3 pt-2'>
       <p>Monday - Friday: 09:00 - 20:00</p>
       <p>Sunday & Saturday: 10:30 - 22:00</p>
      </div>
     </div>

    </div>
   </div>
  </div>
 );
};

export default Contact;