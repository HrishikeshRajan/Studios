import React from 'react';
import Profile from './Profile';
import { Header } from '../Header/Header';
import BottomBar from '../Footer/BottomBar';

const UserProfile = () => {
  return (
    <div>
      <Header />
      <div className="relative bg-slate-950">
        <div className="w-full md:pt-40 flex justify-center ">
          <Profile />
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default UserProfile;
