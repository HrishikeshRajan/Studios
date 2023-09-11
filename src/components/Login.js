import React, { useState } from 'react';
import { Header } from './Header';
export const Login = () => {
 const [LogginForm, setLoginForm] = useState(true);

 const handleForm = () => {
    setLoginForm(!LogginForm)
 }



    return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form
        action=""
        method="post"
        className=" flex flex-col text-white absolute p-12 w-3/12 bg-opacity-80 bg-black my-36 mx-auto right-0 left-0 "
      >
        <h1 className="text-3xl font-bold p-2">{LogginForm?"Sign In":"Sign Up"}</h1>
    
       {!LogginForm && <input
          type="text"
          name="fullname"
          placeholder="Enter fulname"
          id=""
          className="p-2 my-2 w-full bg-slate-700"
        />}

        <input
          type="text"
          name="email"
          placeholder="Email Address"
          id=""
          className="p-2 my-2 w-full bg-slate-700"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          id=""
          className="p-2 my-2 w-full bg-slate-700"
        />
        <button
          type="submit"
          className="p-2 my-2 bg-red-600 font-medium rounded-sm text-white"
        >
         {LogginForm?"Sign In":"Sign Up"}
        </button>

        <p className='font-normal py-4' > {LogginForm?"New to Frames?":"Already have an account?"} <span onClick={() => handleForm()} className='cursor-pointer'>{LogginForm? "Signup":"Sign In"}</span></p>
      </form>
    </div>
  );
};
