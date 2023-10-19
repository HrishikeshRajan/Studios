import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import useSignOut from '../../hooks/useSignout';

const ProfileTabs = () => {
  const [tab, setTab] = useState('profile');
  const signout = useSignOut()

  const handleTabEvent = (e) => {
    setTab(e.target.getAttribute('data-tab'));
  };
  return (
    <div className="w-screen px-10">
      <ul className="flex justify-start">
        <li
          className={`p-4 mx-2 ${tab === 'profile' && 'border-b-2'} text-white cursor-pointer`}
          data-tab="profile"
          onClick={(e) => handleTabEvent(e)}
        >
          Profile
        </li>
        <li
          className={`p-4 mx-2 ${tab === 'account' && 'border-b-2'} text-white cursor-pointer`}
          data-tab="account"
          onClick={(e) => handleTabEvent(e)}
        >
          Your Account
        </li>
      </ul>

      <div className="w-full py-10">
        {tab === 'profile' && (
          <div className="flex flex-col" id="tab1">
            <div className="border-2 border-slate-300  p-7 my-2 rounded">
              <Link to={'/profile'}>
                <h4 className="font-bold text-lg text-white">Edit Profile </h4>
                <p className="my-4 text-white">
                  Edit your profile and  more...       <FontAwesomeIcon icon={faAngleRight} />
                </p>
              </Link>
            </div>
          </div>
        )}

        {tab === 'account' && (
          <div className="flex flex-col" id="tab2">
            <div className="border-2 border-slate-300 p-7 my-2 rounded">
              <Link to={'/account/delete'}>
                <h4 className="font-bold text-lg text-white">Delete Account  </h4>
                <p className="my-4 text-white text-justify">
                  Your streams account and all data releated to this account
                  will be permanently deleted <FontAwesomeIcon icon={faAngleRight} />
                </p>
              </Link>
            </div>
            <div className="border-2 border-slate-300  p-7 my-2 rounded">
              <Link to={'#'} onClick={()=>signout()}>
                <h4 className="font-bold text-lg text-white">       <FontAwesomeIcon icon={faRightFromBracket} /> Signout </h4>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;
