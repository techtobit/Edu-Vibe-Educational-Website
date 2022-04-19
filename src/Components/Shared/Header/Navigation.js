import React from 'react';
import { Link } from 'react-router-dom';
import siteLog from '../../Assets/logo.png'
import './Navigation.css'
import '../../../App.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navigation = () => {
 const [user] = useAuthState(auth);
 const handelSingOut = () => {
  signOut(auth)
 }
 return (
  <div className='nav-container grid grid-cols-3
  justify-between items-center pt-2 pb-2'>
   <div className="nav-logo grid pl-10 items-center">
    <img className='w-40  grid ' src={siteLog} alt="" />
   </div>
   <div className="nav-links font-bold flex justify-center">
    <Link className='links p-4' to='/home'>Home</Link>
    <Link className='links p-4 ' to='/courses'>Courses</Link>
    <Link className='links p-4 ' to='/blog'>Blog</Link>
    <Link className='links p-4 ' to='/about'>About</Link>
    <Link className='links p-4 ' to='/contact'>Contact</Link>
   </div>
   <div className="nav-btn font-bold flex flex-row-reverse p-2 pr-10 text-center ">
    {user ?
     <Link to='/login' onClick={handelSingOut} type='button' className='w-32 btn border-2 pt-1  text-center hover:bg-blue-600 hover:text-white rounded'>LogOut</Link>
     :
     <Link to='/login' type='button' className='w-32 btn border-2 pt-1  text-center hover:bg-blue-600 hover:text-white rounded'>LogIn</Link>
    }
   </div>
  </div>
 );
};

export default Navigation;