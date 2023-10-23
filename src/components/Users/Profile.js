import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRightFromBracket,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import useSignOut from '../../hooks/useSignout';
import { SUPPORTED_LANGUAGES } from '../../utils/languageConstant';

const Profile = () => {
  const [tab, setTab] = useState('profile');
  const signout = useSignOut();
  const handleTabEvent = (e) => {
    setTab(e.target.getAttribute('data-tab'));
  };
  const [lang, setLang] = useState({
    code: SUPPORTED_LANGUAGES[0].code,
    name: SUPPORTED_LANGUAGES[0].name,
  });
  const handleLanguage = (code, name) => {
    setLang({ code, name });
  };

  const [lanuageOpt, setLanguageOpt] = useState(false);

  return (
    <div className="w-screen px-10 pt-20">
      <ul className="flex justify-start">
        <li
          className={`p-4 mx-2 ${
            tab === 'profile' && 'border-b-2'
          } text-white text-xs cursor-pointer`}
          data-tab="profile"
          onClick={(e) => handleTabEvent(e)}
        >
          Profile
        </li>
        <li
          className={`p-4 mx-2 ${
            tab === 'account' && 'border-b-2'
          } text-white text-xs cursor-pointer`}
          data-tab="account"
          onClick={(e) => handleTabEvent(e)}
        >
          Account
        </li>
        <li
          className={`p-4 mx-2 text-xs ${
            tab === 'settings' && 'border-b-2'
          } text-white cursor-pointer`}
          data-tab="settings"
          onClick={(e) => handleTabEvent(e)}
        >
          Settings
        </li>
      </ul>

      <div className="w-full py-10">
        {tab === 'profile' && (
          <div className="flex flex-col" id="tab1">
            <div className="border-2 border-slate-300  p-7 my-2 rounded">
              <Link to={'/profile'}>
                <h4 className="font-bold text-lg text-white">Edit Profile </h4>
                <p className="my-4 text-white">
                  Edit your profile and more...{' '}
                  <FontAwesomeIcon icon={faAngleRight} />
                </p>
              </Link>
            </div>
          </div>
        )}

        {tab === 'account' && (
          <div className="flex flex-col" id="tab2">
            <div className="border-2 border-slate-300 p-7 my-2 rounded">
              <Link to={'/account/delete'}>
                <h4 className="font-bold text-lg text-white">
                  Delete Account{' '}
                </h4>
                <p className="my-4 text-white text-justify">
                  Your streams account and all data releated to this account
                  will be permanently deleted{' '}
                  <FontAwesomeIcon icon={faAngleRight} />
                </p>
              </Link>
            </div>
            <div className="border-2 border-slate-300  p-7 my-2 rounded">
              <Link to={'#'} onClick={() => signout()}>
                <h4 className="font-bold text-lg text-white">
                  {' '}
                  <FontAwesomeIcon icon={faRightFromBracket} /> Signout{' '}
                </h4>
              </Link>
            </div>
          </div>
        )}
        {tab === 'settings' && (
          <div className="flex flex-col" id="tab2">
            <div onClick={() => setLanguageOpt(!lanuageOpt)} className="border-2 border-slate-300 p-7 my-2 rounded lg:w-4/12">
              <div >
                <h4 className="font-semibold text-xs text-white flex justify-between">
                  <span> Preffered Language</span>
                  <FontAwesomeIcon className={`${lanuageOpt?'transform rotate-90':''}`} icon={faAngleRight} />
                </h4>
              </div>

              {lanuageOpt && (
                <div className={`w-full mt-10 `} >
                  <ul>
                    {SUPPORTED_LANGUAGES.map((language, index) => (
                      <li
                        key={index}
                        className="text-white py-3 mx-2 text-sm font-semibold "
                        onClick={() =>
                          handleLanguage(language.code, language.name)
                        }
                      >
                        {language.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
