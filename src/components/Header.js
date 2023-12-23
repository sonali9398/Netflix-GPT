import React from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice'; 
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NETFLIX_LOGO, USER_IMG } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }
  useEffect(() =>{
    const unsunbscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({uid: uid, email:email, displayName: displayName}));
          navigate("/browser")
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/');
        }
      });
// unsubscribe when component unmount 
      return () => unsunbscribe();
}, []);
  return (
    <div className='absolute w-full px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
            alt='logo'
            src={NETFLIX_LOGO}
        />
        <div className='flex p-2 '>
          <img className='w-8 h-8 m-2 rounded-md shadow-lg'
            alt='userImg'
            src={USER_IMG}
          />
          <button className='bg-red-700 rounded-md shadow-lg text-white font-normal p-2 m-2'
          onClick={handleSignOut}>
              SignOut
          </button>
        </div>
    </div>
  )
}

export default Header