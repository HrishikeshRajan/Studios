import React, { useRef, useState } from 'react';
import { Header } from '../Header/Header';
import BottomBar from '../Footer/BottomBar';
import defaultUser from '../../images/5856.jpg';
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser,
} from 'firebase/auth';
import { auth } from '../../utils/firbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { LANG } from '../../utils/languageConstant';

const DeleteUser = () => {
  const [msgError, setMsgError] = useState(null);

  const password = useRef(null);
  const language = useSelector((store) => store.appConfig.language);
  if (language === undefined) return;
  const handleSaveForm = async () => {
    const errors = true;
    setMsgError(errors);

    if (errors) return;
    const promptForCredentials = () => {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        password.current.value,
      );
      return credential;
    };

    const credential = promptForCredentials();
    reauthenticateWithCredential(auth.currentUser, credential)
      .then((result) => {
        const status = result._tokenResponse.registered;
        if (status) {
          deleteUser(auth.currentUser)
            .then(() => {})
            .catch((error) => {
              setMsgError('Authentication Failed');
            });
        }
      })
      .catch((error) => {
        setMsgError('Authentication Failed');
      });
  };

  return (
    <div className="bg-gray-950">
      <Header />

      <div className="w-screen  h-screen  flex flex-col justify-center">
        <div className="flex w-full flex-col">
          <div className="w-full text-center">
            <h1 className="text-white font-bold text-3xl my-5">
              {LANG[language.code].User.AccountTab.SUBTITLE_DELETE_ACCOUNT}
            </h1>
          </div>
          <div className="w-full h-full flex justify-center  ">
            <img
              src={defaultUser}
              className="w-20 h-20 mx-2 rounded-full "
              alt="defaul user"
            />
          </div>
          <div className="w-full h-full flex justify-center   ">
            <form
              action=""
              method="post"
              onSubmit={(e) => e.preventDefault()}
              className=" flex flex-col text-white w-full px-4 lg:w-4/12 p-2 bg-black"
            >
              {msgError && (
                <p className="text-red-700 border-1 p-2 border-red-600 bg-red-200">
                  <sup>*</sup>
                  {msgError} <FontAwesomeIcon icon={faCircleExclamation} />
                </p>
              )}

              <input
                type="password"
                name="password"
                placeholder={LANG[language.code].SignupPage.EnterPassword}
                ref={password}
                className="p-2 my-2 w-full bg-slate-700"
              />

              <button
                type="submit"
                className="p-2 my-2 bg-red-600 font-medium rounded-sm text-white"
                onClick={handleSaveForm}
              >
                {LANG[language.code].User.AccountTab.CONFIRM_PASSWORD}
              </button>
            </form>
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  );
};

export default DeleteUser;
