import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const AddToCart = () => {
 const navigate = useNavigate()

 const handelMakePayment = e => {
  alert('Your Shipping Address Add!, Ready To Make Payment')
  navigate('/home')
 }

 return (
  <div>
   <div className="contac-from grid justify-center py-10">
    <div className="form-header pt-5 pb-20">
     <p className='text-blue-500 text-2xl'>Make Payment</p>
     <h2 className='text-4xl font-bold'>Shipping Information</h2>
    </div>
    <form onSubmit={handelMakePayment} className=''>
     <div className="input-div pb-4 flex">
      <input className=' border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' type='text' placeholder="FirstName*" />
      <div className='pl-5'>
       <input className=' border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' type='text' placeholder="FirstName*" />
      </div>
     </div>
     <div className="input-div pb-3">
      <input className='w-2/3 border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' id='email' type="email" placeholder="email" />
     </div>
     <div className="input-div pb-3">
      <input className='w-2/3 border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' id='phone' type="number" placeholder="(+880)1xxxxxxxxx" />
     </div>
     <div className="input-div pb-3">
      <input className='w-2/3 border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' id='address' type="address" placeholder="Address 2 (optional)" />
     </div>
     <div className="input-div pb-3">
      <input className='w-2/3 border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' id='address' type="address2" placeholder="Address 2 (optional)" />
     </div>
     <div className="input-div pb-3">
      <input className='w-2/3 border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' id='city' type="city" placeholder="city" />
     </div>
     <div className="input-div pb-3">
      <input className='w-2/3 h-max border-solid bg-slate-50 hover:border-blue-400 border py-2 px-4 rounded text-gray-700' id='zipCode' type="number" placeholder="ZipCode" />
     </div>
     <button className='w-30 bg-blue-600 hover:bg-blue-700 border-blue-400 text-center border-solid rounded border  text-xl font-medium p-2  text-white '>Make Payment
      <FontAwesomeIcon className='pl-2' icon={faArrowRight}></FontAwesomeIcon>
     </button>
    </form>
   </div>
  </div>
 );
};

export default AddToCart;