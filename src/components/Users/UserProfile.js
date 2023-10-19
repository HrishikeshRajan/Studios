import React from 'react';
import { Header } from '../Header/Header';
import BottomBar from '../Footer/BottomBar';
import Profile from './Profile';

const UserProfile = () => {
  return (
    <div className="relative  bg-slate-950">
      <Header />

      <div className="w-full md:pt-40 flex justify-center ">
        <Profile />
      </div>

      <BottomBar />
    </div>
  );
};

export default UserProfile;
