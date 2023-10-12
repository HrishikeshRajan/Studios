import React, { useEffect, useState } from 'react';
import defaultUser from '../images/5856.jpg';
import logo from '../images/streams.png';

import { useDispatch, useSelector } from 'react-redux';

import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/languageConstant';
import { changeLanguage } from '../utils/appConfigSlice';
import useAuthenticate from '../hooks/useAuthentications';
import { Link } from 'react-router-dom';
import useSignOut from '../hooks/useSignout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NAVBAR_OPTIONS } from '../utils/constants';
import { addActiveTab } from '../utils/userSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.showGptSearch);

  useAuthenticate();

  const [toggle, setToggle] = useState(false);
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

        {user.user && (
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
                    ? 'bg-white bg-opacity-80 text-white '
                    : ''
                }  ${
                  user.activeTab !== NAVBAR_OPTIONS.Search &&
                  'hover:bg-white hover:bg-opacity-10 hover:text-white text-slate-300'
                } font-medium  mx-1 px-5 py-3 rounded`}
                onClick={() => handleMovieClick(NAVBAR_OPTIONS.Search)}
              >
                <Link to={'/browse'}> Search</Link>
              </li>
            </ul>
          </div>
        )}

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
                  className="rounded bg-black text-white border-0"
                  onChange={handleLanguage}
                >
                  {SUPPORTED_LANGUAGES.map((language) => (
                    <option
                      key={language.code}
                      value={language.code}
                      className="bg-red-300 border-0"
                    >
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>
            }

            <div className="flex flex-col items-center relative group">
              <img
                className="w-10 h-10 rounded-full"
                src={defaultUser}
                alt="Default Logo"
                onClick={() => setToggle(!toggle)}
              />

              <ul className="text-white text-xs p-3 bg-gray-900 absolute hidden group-hover:block  lg:right-0 top-14 rounded z-50">
                <li className="hover:bg-gray-800 py-3 px-2 w-full ">
                  {user.user.email}
                </li>
                <li className="hover:bg-gray-800 py-3 px-2 w-full cursor-pointer ">
                  <Link to={'/account'}> Account </Link>
                </li>
                <li>
                  <hr className="border-slate-700 p-2" />
                </li>
                <li
                  className="hover:bg-gray-800 py-2 w-full cursor-pointer"
                  onClick={() => {
                    signout();
                  }}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} /> Sign Out
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
