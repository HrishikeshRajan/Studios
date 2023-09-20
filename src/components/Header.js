import React, { useEffect } from 'react';
import defaultUser from '../images/5856.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firbase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';


export const Header = () => {

  const dispatch = useDispatch();

  useEffect(() => {
  const unSubscribe =   onAuthStateChanged(auth, (user) => {
      if (user) {
  
        const {uid, email, displayName} = auth.currentUser;
 
        dispatch(addUser({uid, email, displayName}))
  
        navigate('/browse')
  
      } else {
        // User is signed out
        // ...

        dispatch(removeUser())
      
        navigate('/')
        
      }
    });

    return () => unSubscribe();
  },[])


  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className="flex absolute px-8 py-2 w-screen  bg-gradient-to-b from-black z-10 justify-between">
      <div className="">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
     { user && ( <div className="flex flex-col items-center">
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
      </div>)}
    </div>
  );
};
