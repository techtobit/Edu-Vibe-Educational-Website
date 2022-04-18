import React from 'react';
import { Link } from 'react-router-dom';
import siteLog from '../../Assets/logo.png'
import './Navigation.css'
import '../../../App.css'
const Navigation = () => {
 return (
  <div className='nav-container grid grid-cols-3 
  justify-between items-cente pt-2 pb-2'>
   <div className="nav-logo grid pl-10 items-center">
    <img className='w-40 grid ' src={siteLog} alt="" />
   </div>
   <div className="nav-links font-bold flex justify-center">
    <Link className='links p-4' to='/home'>Home</Link>
    <Link className='links p-4 ' to='/courses'>Courses</Link>
    <Link className='links p-4 ' to='/blog'>Blog</Link>
    <Link className='links p-4 ' to='/about'>About</Link>
    <Link className='links p-4 ' to='/contact'>Contact</Link>
   </div>
   <div className="nav-btn font-bold flex flex-row-reverse p-2 pr-10 text-center">
    <Link to='/login' type='button' className='w-32 btn border-2 pt-1  text-center'>LogIn</Link>
   </div>
  </div>
 );
};

export default Navigation;