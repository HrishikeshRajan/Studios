/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from 'react';
import { Header } from '../Header/Header';
import { Background } from '../../utils/constants';
import { loginToAccount, registerAccount } from '../../utils/firebaseHelper';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import { auth } from '../../utils/firbase';

export const Login = () => {
  const [LogginForm, setLoginForm] = useState(true);
  const [error, setError] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const dispatch = useDispatch();

  const handleFormAction = async () => {
    try {
      if (!LogginForm) {
        await registerAccount(
          fullname.current.value,
          email.current.value,
          password.current.value,
        );
        const user = {
          id: auth.currentUser.uid,
          email: auth.currentUser.email,
          displayName: auth.currentUser.displayName,
        };
        dispatch(addUser(user));
      } else {
        await loginToAccount(email.current.value, password.current.value);
      }
    } catch (error) {
      setError('Invalid Email or Password');
    }
  };

  const handleForm = () => {
    setLoginForm(!LogginForm);
  };

  return (
    <div>
      <Header />
      <div className="">
        <img
          src={Background}
          alt="logo"
          className="w-screen h-screen md:h-full object-cover absolute -z-0 inset-0 "
        />
      </div>
      <div className="w-full h-screen px-20 flex justify-center items-center">
        <form
          method="post"
          onSubmit={(e) => e.preventDefault()}
          className=" flex flex-col  items-center z-10   absolute w-full  h-auto md:h-auto   text-white  p-7  rounded  md:w-6/12 bg-opacity-80 bg-black  md:mx-auto "
        >
          <h1 className="text-3xl font-bold p-2">
            {LogginForm ? 'Sign In' : 'Sign Up'}
          </h1>

          {LogginForm && error && (
            <h1 className="text-sm bg-red-500 bg-opacity-90 font-bold p-2">
              {error}
            </h1>
          )}

          {!LogginForm && (
            <input
              type="text"
              name="fullname"
              ref={fullname}
              placeholder="Enter fullname"
              className="p-2 my-2 w-full bg-slate-700"
            />
          )}

          <input
            type="email"
            name="email"
            ref={email}
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-slate-700"
          />
          <input
            type="text"
            ref={password}
            name="password"
            placeholder="Password"
            className="p-2 my-4 w-full bg-slate-700"
          />
          <button
            type="submit"
            className="p-2 my-2 w-full bg-red-600 font-medium rounded-sm text-white"
            onClick={() => handleFormAction()}
          >
            {LogginForm ? 'Sign In' : 'Sign Up'}
          </button>

          <p className="font-normal mt-5 py-4">
            {LogginForm ? 'New to Frames?' : 'Already have an account?'}{' '}
            <span onClick={() => handleForm()} className="cursor-pointer">
              {LogginForm ? 'Signup' : 'Sign In'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
