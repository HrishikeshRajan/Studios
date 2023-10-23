import React, { useEffect, useState } from 'react';
import defaultUser from '../../images/5856.jpg';
import logo from '../../images/streams.png';

import { useDispatch, useSelector } from 'react-redux';

import { toggleGptSearchView } from '../../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../../utils/languageConstant';
import { changeLanguage } from '../../utils/appConfigSlice';
import useAuthenticate from '../../hooks/useAuthentications';
import { Link } from 'react-router-dom';
import useSignOut from '../../hooks/useSignout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NAVBAR_OPTIONS } from '../../utils/constants';
import { addActiveTab } from '../../utils/userSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.showGptSearch);
  const [lang, setLang] = useState({code:SUPPORTED_LANGUAGES[2].code,name:SUPPORTED_LANGUAGES[2].name});
  // const [lang, setLang] = useState(SUPPORTED_LANGUAGES[2].name);

  useAuthenticate();

  const [toggle, setToggle] = useState(false);
  const signout = useSignOut();

  const handleLanguage = (code,name) => {
    // dispatch(changeLanguage(e.target.value));
    setLang({code,name});
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
    <nav className="bg-black absolute  top-0 left-0 right-0 z-50">
      <div className="container mx-auto h-20 bg-black  100 px-5 py-2 lg:flex items-center z-10">
        <div className="flex justify-center lg:justify-start">
          <Link to={'/browse'}>
            <img className="w-14  md:w-20 rounded-xl" src={logo} alt="logo" />
          </Link>
        </div>

        {user.user && (
          <div id="menu" className=" mx-auto  md:mt-0 hidden lg:flex ">
            <ul className="ml-auto md:flex h-20">
              <li
                className={`${
                  user.activeTab === NAVBAR_OPTIONS.Home
                    ? 'border-b-2 bg-opacity-40 text-white  '
                    : ''
                } ${
                  user.activeTab !== NAVBAR_OPTIONS.Home &&
                  'hover:bg-white hover:bg-opacity-10 hover:text-white text-slate-300'
                } font-medium   mx-1 px-5 py-3 flex justify-center items-center `}
                onClick={() => handleHomePageTab(NAVBAR_OPTIONS.Home)}
              >
                <Link to={'/browse'}> Home </Link>
              </li>
              <li
                className={`${
                  user.activeTab === NAVBAR_OPTIONS.Search
                    ? 'border-b-2 bg-opacity-80 text-white '
                    : ''
                }  ${
                  user.activeTab !== NAVBAR_OPTIONS.Search &&
                  'hover:bg-white hover:bg-opacity-10 hover:text-white text-slate-300'
                } font-medium  mx-1 px-5 py-3  flex justify-center items-center `}
                onClick={() => handleMovieClick(NAVBAR_OPTIONS.Search)}
              >
                <Link to={'/browse'}> Search</Link>
              </li>
            </ul>
          </div>
        )}

        {user.user && (
          <div className="lg:justify-between hidden lg:flex">
            {/* {
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
            } */}
            {
              <div className="flex px-3 pr-10 mr-10  justify-center group items-center relative ">
                <h4 className="text-slate-200 text-xs ">
                  {
                    lang.name
                  }
                </h4>
                <ul className="w-48 right-0 p-2 bg-black hidden group-hover:block absolute top-10">
                  {SUPPORTED_LANGUAGES.map((language, index) => (
                    <li
                      key={index}
                      onClick={() => handleLanguage(language.code, language.name)}
                  
                      className='mt-5 py-4 px-2 text-xs  font-semibold rounded text-slate-300 hover:bg-white hover:bg-opacity-30'
                    >
                      {language.name}
                    </li>
                  ))}
                </ul>
              </div>
            }

            <div className=" w-full flex flex-col items-center relative group ">
              <img
                className="w-10 h-10 rounded-full"
                src={defaultUser}
                alt="Default Logo"
                onClick={() => setToggle(!toggle)}
              />

              <div className="  top-10 text-xs p-2 bg-black hidden absolute  group-hover:block   lg:right-0 z-50">
                <div className="hover:bg-gray-800 mt-5  text-xs font-semibold text-slate-200  py-4 px-2 w-full rounded ">
                  {user.user.email}
                </div>

                <Link to={'/account'}>
                  <div className="hover:bg-gray-800  text-slate-200 text-xs  py-4 px-2 w-full font-semibold rounded cursor-pointer ">
                    Account
                  </div>
                </Link>

                <div>{/* <hr className="border-slate-700 p-2" /> */}</div>
                <div
                  className="hover:bg-gray-800 py-4  text-slate-200 text-xs font-semibold px-2 rounded w-full cursor-pointer"
                  onClick={() => {
                    signout();
                  }}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} /> Sign Out
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
