import React, { useRef, useState } from 'react';
import { Header } from './Header/Header';
import { validate } from '../utils/validateInput';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../utils/firbase';

import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Background } from '../utils/constants';

export const Login = () => {
  const [msgError, setMsgError] = useState(null);
  const [LogginForm, setLoginForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const dispatch = useDispatch();

  const handleFormAction = () => {
    const name = fullname.current ? fullname.current.value : null;
    const errors = validate(email.current.value, password.current.value, name);

    setMsgError(errors);

    if (errors) return;

    if (!LogginForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((result) => {
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMsgError(errorCode + ' - ' + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMsgError(errorCode + ' - ' + errorMessage);
        });
    }
  };

  const handleForm = () => {
    setLoginForm(!LogginForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={Background}
          alt="logo"
          className="w-screen h-screen object-cover"
        />
      </div>
      <form
        action=""
        method="post"
        onSubmit={(e) => e.preventDefault()}
        className=" flex flex-col text-white absolute p-7 mx-2 rounded md:p-12 md:w-3/12 bg-opacity-80 bg-black my-36 md:mx-auto right-0 left-0 "
      >
        <h1 className="text-3xl font-bold p-2">
          {LogginForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {msgError && <p>{msgError}</p>}

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
          className="p-2 my-2 w-full bg-slate-700"
        />
        <input
          type="text"
          ref={password}
          name="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-slate-700"
        />
        <button
          type="submit"
          className="p-2 my-2 bg-red-600 font-medium rounded-sm text-white"
          onClick={() => handleFormAction()}
        >
          {LogginForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="font-normal py-4">
          {LogginForm ? 'New to Frames?' : 'Already have an account?'}{' '}
          <span onClick={() => handleForm()} className="cursor-pointer">
            {LogginForm ? 'Signup' : 'Sign In'}
          </span>
        </p>
      </form>
    </div>
  );
};
