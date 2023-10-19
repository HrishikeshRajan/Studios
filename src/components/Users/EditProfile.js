import React, { useRef, useState } from 'react';
import { Header } from '../Header/Header';
import BottomBar from '../Footer/BottomBar';
import defaultUser from '../../images/5856.jpg';
import { updateProfile } from 'firebase/auth';
import { validate } from '../../utils/validateInput';
import { auth } from '../../utils/firbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const EditProfile = () => {
  const [msgError, setMsgError] = useState(null);
  const [msgSuccess, setMsgSuccess] = useState(null);
  const fullname = useRef(null);

  const handleSaveForm = async () => {
    const errors = validate(fullname.current.value);
    console.log(errors)
    setMsgError(errors);

    if (errors) return;
    updateProfile(auth.currentUser, {
      displayName: fullname.current.value,
    })
      .then(() => {
        setMsgSuccess('Successfully Updated');
      })
      .catch((error) => {
        setMsgError(errors);
      });
  };

  return (
    <div className="bg-gray-950">
      <Header />

      <div className="w-screen  h-screen flex flex-col justify-center">
        <div className="flex w-full flex-col">
          <div className="w-full text-center">
            <h1 className="text-white font-bold text-3xl my-5">Edit Profile</h1>
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
              className=" flex flex-col text-white w-4/12 p-2 bg-black"
            >
              {msgError && <p className="text-red-700 border-1 p-2 border-red-600 bg-red-200"><sup>*</sup>{msgError} <FontAwesomeIcon icon={faCircleExclamation} /></p>}
              {msgSuccess && <p className="text-green-500 border-1 p-2 border-green-800 bg-green-100 ">{msgSuccess}          <FontAwesomeIcon icon={faCheck} /></p>}


              <input
                type="text"
                name="fullname"
                placeholder="Enter fulname"
                ref={fullname}
                className="p-2 my-2 w-full bg-slate-700"
              />

              <button
                type="submit"
                className="p-2 my-2 bg-red-600 font-medium rounded-sm text-white"
                onClick={handleSaveForm}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  );
};

export default EditProfile;
