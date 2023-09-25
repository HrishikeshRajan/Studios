import React, { useEffect } from 'react';
import defaultUser from '../images/5856.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firbase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/languageConstant';
import { changeLanguage } from '../utils/appConfigSlice';

export const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = auth.currentUser;

        dispatch(addUser({ uid, email, displayName }));

        navigate('/browse');
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());

        navigate('/');
      }
    });

    return () => unSubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="flex absolute px-8 py-2 w-screen  bg-gradient-to-b from-black z-10 flex-col md:flex-row justify-between">
      <div className="flex justify-center md: justify-start">
        <img
          className="w-14  md:w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      {user && (
        <div className="flex justify-between">
          {gpt && (
            <div className="flex px-3 my-4 justify-end">
              <select
                name=""
                className="rounded bg-black text-white"
                onChange={handleLanguage}
                id=""
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
            {gpt?"Home":"Search GPT"}
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
                handleSignOut();
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
