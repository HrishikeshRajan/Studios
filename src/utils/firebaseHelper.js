import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firbase';



const updateFullname = async (fullname) => {
  await updateProfile(auth.currentUser, {
    displayName: fullname,
  });
};
export const registerAccount = async (fullname, userEmail, userPassword) => {
  await createUserWithEmailAndPassword(auth, userEmail, userPassword);
  await updateFullname(fullname);

};

export const loginToAccount = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
