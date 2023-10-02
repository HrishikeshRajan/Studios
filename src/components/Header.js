import React, { useEffect } from 'react';
import defaultUser from '../images/5856.jpg';
import logo from '../images/streams.png';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firbase';
import { useDispatch, useSelector } from 'react-redux';

import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/languageConstant';
import { changeLanguage } from '../utils/appConfigSlice';
import useAuthenticate from '../hooks/useAuthentications';
import { Link } from 'react-router-dom';
import useSignOut from '../hooks/useSignout';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.showGptSearch);

  useAuthenticate();
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

   const signout = useSignOut()

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleMovieClick = () => {
    console.log(gpt);
    if (!gpt) {
      dispatch(toggleGptSearchView());
    }
  };
  const handleHomePageTab = () => {
    if (gpt) {
      dispatch(toggleGptSearchView());
    }
  };

  useEffect(() => {}, [gpt]);

  return (
    <div className="flex absolute px-8 py-2 w-screen  bg-gradient-to-b from-black z-10 flex-col md:flex-row justify-between">
      <div className="flex justify-center md:justify-start">
        <img className="w-14  md:w-20 rounded-xl" src={logo} alt="logo" />
      </div>

      <div className=" md:w-80 md:flex relative md:justify-center hidden ">
        <ul className="flex justify-between w-full absolute bottom-1/3 ">
          <Link to={'/browse'}>
            <li className="font-medium text-white" onClick={handleHomePageTab}>
              Home
            </li>
          </Link>
          <Link to={'/browse'}>
            <li className="font-medium text-white" onClick={handleMovieClick}>
              Search
            </li>
          </Link>
          <Link to={'/account'}>
            <li className="font-medium text-white">Account</li>
          </Link>
        </ul>
      </div>

      {user.user && (
        <div className="flex justify-between">
          {gpt && (
            <div className="flex px-3 my-4 justify-end">
              <select
                className="rounded bg-black text-white"
                onChange={handleLanguage}
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            className="px-3 py-1 my-4 rounded bg-purple-900 mr-6 text-white"
            onClick={handleGptSearchClick}
          >
            {gpt ? 'Home' : 'Ask to GPT'}
          </button>

          <div className="flex flex-col items-center">
            <img
              className="w-10 rounded-2xl"
              src={defaultUser}
              alt="Default Logo"
            />
            <button
              className="text-slate-200"
              onClick={() => {
                signout();
              }}
            >
              SignOut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
