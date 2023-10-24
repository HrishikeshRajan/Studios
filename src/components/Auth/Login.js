/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from 'react';
import { Header } from '../Header/Header';
import { Background } from '../../utils/constants';
import { loginToAccount, registerAccount } from '../../utils/firebaseHelper';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import { auth } from '../../utils/firbase';
import { LANG } from '../../utils/languageConstant';

export const Login = () => {
  const [LogginForm, setLoginForm] = useState(true);
  const [error, setError] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const dispatch = useDispatch();
  const language = useSelector((store) => store.appConfig.language);
  if(language === undefined) return
  
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
      setError('Please add required field for authentication');
    }
  };

  const handleForm = () => {
    setLoginForm(!LogginForm);
  };

  return (
    <div>
      <div>
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
          className=" flex flex-col  items-center z-10   absolute w-full  h-auto md:h-auto   text-white  p-7  rounded  md:w-6/12 lg:w-4/12 bg-opacity-80 bg-black  md:mx-auto "
        >
          <h1 className="text-3xl font-bold p-2">
            {LogginForm ? LANG[language.code].SigninPage.Signin : LANG[language.code].SignupPage.Signup}
          </h1>

          {error && error && (
            <h1 className="text-sm bg-red-500 bg-opacity-90 w-full font-bold p-2">
              {error}
            </h1>
          )}

          {!LogginForm && (
            <input
              type="text"
              name="fullname"
              ref={fullname}
              placeholder={LANG[language.code].SignupPage.EnterFullname}
              className={`p-2 my-2 w-full bg-slate-700 ${error && ' border-2 border-red-500' }`}
            />
          )}

          <input
            type="email"
            name="email"
            ref={email}
            placeholder={LANG[language.code].SignupPage.EnterEmailAddress}
            className={`p-2 my-2 w-full bg-slate-700 ${error && ' border-2 border-red-500' }`}
          />
          <input
            type="text"
            ref={password}
            name="password"
            placeholder={LANG[language.code].SignupPage.EnterPassword}
            className={`p-2 my-2 w-full bg-slate-700 ${error && ' border-2 border-red-500' }`}
          />
          <button
            type="submit"
            className="p-2 my-2 w-full bg-red-600 font-medium rounded-sm text-white"
            onClick={() => handleFormAction()}
          >

       
            {LogginForm? LANG[language.code].SigninPage.Signin :  LANG[language.code].SignupPage.Signup }
          </button>

          <p className="font-normal mt-5 py-4">
            {LogginForm ?  LANG[language.code].SigninPage.NewToCompany : LANG[language.code].SignupPage.AlreadyHaveAnAccount}
            <span onClick={() => handleForm()} className="cursor-pointer underline ml-2 font-bold text-md">
              {LogginForm ? LANG[language.code].SignupPage.Signup : LANG[language.code].SigninPage.Signin}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
