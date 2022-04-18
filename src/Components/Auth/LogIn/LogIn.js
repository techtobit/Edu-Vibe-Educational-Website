import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '../../Assets/icons-google50.svg'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import '../AuthFrom.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  //singUp with google provider
  const [signInWithGoogle, user2] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handelEmail = e => {
    setEmail(e.target.value)
  }
  const handelPassword = e => {
    setPassword(e.target.value)
  }
  const handelLogin = e => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(password, email)
  }

  const handelSignInWithGoogle = () => {
    signInWithGoogle()
  }

  // const handelSingOut = () => {
  //   signOut(auth)
  //     .then(() => { })
  // }
  if (user) {
    navigate('/courses')
  }

  if (user2) {
    navigate('/courses')
  }
  return (
    <div className="login-container grid justify-center justify-items-center pt-10  ">
      <div className='login-section auth-from-bg  w-96 h-auto bg-slate-100 p-5 m-5 border-2 rounded-md'>
        <h3 className='section-title text-3xl font-bold text-start pt-5 pb-5'>LogIn</h3>
        <div className="login-form">
          <form onSubmit={handelLogin} className=''>
            <div className="input-div pb-3">
              <label className='text-lg pb-4' htmlFor="Email"> Email </label>
              <br />
              <input onBlur={handelEmail} className=' w-full border-solid border-blue-400 border py-2 px-4 rounded text-gray-700' type='email' placeholder="Email" />
            </div>
            <div className="input-div pb-3">
              <label htmlFor="Password" className='text-lg pb-4'> Password </label>
              <br />
              <input onBlur={handelPassword} className='w-full border-solid border-blue-400 border py-2 px-4 rounded text-gray-700' id='password' type="password" placeholder="password" />
              <p>{error?.message}</p>
              {
                loading && <p>loading...</p>
              }
            </div>
            <button className='w-full bg-blue-400 hover:bg-blue-600 border-blue-400 text-center border-solid rounded border  text-xl font-medium p-2  text-white '>LogIn</button>
          </form>
          <p className="pt-2">Dont't Have Account? <Link to='/singup' className='text-blue-400 hover:text-blue-600'>Registrar</Link> </p>
          <div className="grid grid-cols-3 items-center pb-2 pt-2">
            <div className=" w-auto h-px bg-slate-400"></div>
            <div className="text-center">or</div>
            <div className=" w-auto h-px bg-slate-400"></div>
          </div>
          <button onClick={handelSignInWithGoogle} className=" w-full justify-center flex items-center text-center border-solid rounded border  bg-gray-200 hover:bg-blue-500 text-md font-normal   text-black">
            <img className='w-50 h-50' src={GoogleIcon}></img>
            <p className='font-bold'>LogIn With Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
// export signOut;