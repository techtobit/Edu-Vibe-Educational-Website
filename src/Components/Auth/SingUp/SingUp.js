import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleIcon from '../../Assets/icons-google50.svg'
import '../AuthFrom.css'

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [checkPassword, setCheckPassword] = useState('');
 const [error, setError] = useState('');

 // singUp with Email Passwrod Auth 
 const [createUserWithEmailAndPassword, user, loading]
  = useCreateUserWithEmailAndPassword(auth);

 //singUp with google provider
 const [signInWithGoogle, user2] = useSignInWithGoogle(auth);

 const navigate = useNavigate();
 //get input value handler 
 const handelEmail = e => {
  setEmail(e.target.value);
 }
 const handelPassword = e => {
  setPassword(e.target.value)
 }
 const handelCheckPassword = e => {
  setCheckPassword(e.target.value)
 }

 // OnSubmit Handel 
 const handleCreateAccount = e => {
  e.preventDefault();
  if (password !== checkPassword) {
   setError('password no matched')
  }
  if (password > 6) {
   setError('Use minimum 6 characters or latter')
  }
  createUserWithEmailAndPassword(email, password)
 }

 const handelSignInWithGoogle = () => {
  signInWithGoogle()
 }

 if (user) {
  navigate('/services')
 }

 if (user2) {
  navigate('/services')
 }


 return (
  <div className="singUp-container auth-container grid justify-center justify-items-center pt-10  ">
   <div className='singUp-section auth-from-bg  w-96 h-auto bg-slate-100 p-5 m-5 border-2 rounded-md'>
    <h3 className='section-title text-3xl font-bold text-start pt-5 pb-5'>Registration</h3>
    <div className="singUp-form">
     <form onSubmit={handleCreateAccount} className=''>
      <div className="input-div pb-3">
       <label className='text-lg pb-4' htmlFor="Email"> Email </label>
       <br />
       <input onBlur={handelEmail} className='w-full border-solid border-blue-400 border py-2 px-4 rounded text-gray-700' type='email' placeholder="xyz@exple.com" required />
      </div>
      <div className="input-div pb-3">
       <label className='text-lg pb-4' htmlFor="password"> Password </label>
       <br />
       <input onBlur={handelPassword} className=' w-full border-solid border-blue-400 border py-2 px-4 rounded text-gray-700' type='password' placeholder="strong password" required />
      </div>
      <div className="input-div pb-3">
       <label htmlFor="Password" className='text-lg pb-4'> CheckPassword </label>
       <br />
       <input onBlur={handelCheckPassword} className='w-full border-solid border-blue-400 border py-2 px-4 rounded text-gray-700' id='password' type="password" placeholder="type again" required />
      </div>
      {/* display error if anything wrong */}
      <p>{error?.message}</p>
      {
       loading && <p>loading...</p>
      }
      <button className='w-full bg-blue-400 hover:bg-blue-600 border-blue-400 text-center border-solid rounded border  text-xl font-medium p-2  text-white '>Registrar</button>
     </form>
     <p className="pt-2">Dont't Have Account? <Link to='/login' className='text-blue-400 hover:text-blue-600'>LogIn</Link> </p>
     <div className="grid grid-cols-3 items-center pb-2 pt-2">
      <div className=" w-auto h-px bg-slate-400"></div>
      <div className="text-center">or</div>
      <div className=" w-auto h-px bg-slate-400"></div>
     </div>
     <button onClick={handelSignInWithGoogle} className=" w-full justify-center flex items-center text-center border-solid rounded border  bg-gray-200 hover:bg-blue-500 text-md font-normal   text-black">
      <img className='w-50 h-50' src={GoogleIcon}></img>
      <p className='font-bold'>Registrar With Google</p>
     </button>
    </div>
   </div>
  </div>
 );
};

export default Login;