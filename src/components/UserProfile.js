import React from 'react';
import { Header } from './Header';
import BottomBar from './BottomBar';
import { useSelector } from 'react-redux';
import Profile from './Profile';


const UserProfile = () => {
  const gpt = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user.user);
  return (
    <div className="relative">
      <Header />
      {!gpt && (
        <div className="w-screen pt-52 flex justify-center ">
         <Profile user={user} />
        </div>
      )}
      <BottomBar />
    </div>
  );
};

export default UserProfile;
