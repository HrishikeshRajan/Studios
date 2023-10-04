import React, { useEffect } from 'react';
import defaultUser from '../images/5856.jpg';
import logo from '../images/streams.png';

import { useDispatch, useSelector } from 'react-redux';

import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/languageConstant';
import { changeLanguage } from '../utils/appConfigSlice';
import useAuthenticate from '../hooks/useAuthentications';
import { Link } from 'react-router-dom';
import useSignOut from '../hooks/useSignout';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { NAVBAR_OPTIONS } from '../utils/constants';
import { addActiveTab } from '../utils/userSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.showGptSearch);

  useAuthenticate();
  // const handleGptSearchClick = () => {
  //   dispatch(toggleGptSearchView());
  // };

  const signout = useSignOut();

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleMovieClick = (OPTIONS) => {
    dispatch(addActiveTab(OPTIONS));
    if (!gpt) {
      dispatch(toggleGptSearchView());
    }
  };
  const handleHomePageTab = (OPTIONS) => {
    dispatch(addActiveTab(OPTIONS));
    if (gpt) {
      dispatch(toggleGptSearchView());
    }
  };

  const handleAccount = (OPTIONS) => {
    dispatch(addActiveTab(OPTIONS));
  };

  useEffect(() => {}, [gpt]);

  return (
    <nav className="bg-black">
      <div className="container mx-auto 100 px-5 py-2 lg:flex items-center z-10">
        <div className="flex justify-center lg:justify-start">
          <Link to={'/browse'}>
            <img className="w-14  md:w-20 rounded-xl" src={logo} alt="logo" />
          </Link>
          {/* <button className="w-14  md:w-20 lg:hidden text-white">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button> */}
        </div>

        <div id="menu" className=" mx-auto md:mt-0 hidden lg:flex ">
          <ul className="ml-auto md:flex ">
            <li
              className={`${
                user.activeTab === NAVBAR_OPTIONS.Home
                  ? 'bg-white bg-opacity-40 text-white '
                  : ''
              } ${
                user.activeTab !== NAVBAR_OPTIONS.Home &&
                'hover:bg-white hover:bg-opacity-10 hover:text-white text-slate-300'
              } font-medium  mx-1 px-5 py-3 rounded`}
              onClick={() => handleHomePageTab(NAVBAR_OPTIONS.Home)}
            >
              <Link to={'/browse'}> Home </Link>
            </li>
            <li
              className={`${
                user.activeTab === NAVBAR_OPTIONS.Search
                  ? 'bg-white bg-opacity-40 text-white '
                  : ''
              }  ${
                user.activeTab !== NAVBAR_OPTIONS.Search &&
                'hover:bg-white hover:bg-opacity-10 hover:text-white text-slate-300'
              } font-medium  mx-1 px-5 py-3 rounded`}
              onClick={() => handleMovieClick(NAVBAR_OPTIONS.Search)}
            >
              <Link to={'/browse'}> Search</Link>
            </li>

            <li
              className={`${
                user.activeTab === NAVBAR_OPTIONS.Account
                  ? 'bg-white bg-opacity-40 text-white '
                  : ''
              }  ${
                user.activeTab !== NAVBAR_OPTIONS.Account &&
                'hover:bg-white hover:bg-opacity-10 hover:text-white text-slate-300'
              } font-medium  mx-1 px-5 py-3 rounded`}
              onClick={() => handleAccount(NAVBAR_OPTIONS.Account)}
            >
              <Link to={'/account'}> Account </Link>
            </li>
          </ul>
        </div>

        {user.user && (
          <div className="lg:justify-between hidden lg:flex">
            {/* <button
              className="px-3 py-1 my-4 rounded bg-purple-900 mr-6 text-white"
              onClick={handleGptSearchClick}
            >
              {gpt ? 'Home' : 'Ask to GPT'}
            </button> */}

            {
              <div className="flex px-3 my-4 justify-end">
                <select
                  className="rounded bg-black text-white border-red-600"
                  onChange={handleLanguage}
                >
                  {SUPPORTED_LANGUAGES.map((language) => (
                    <option key={language.code} value={language.code}>
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>
            }

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
    </nav>
  );
}
