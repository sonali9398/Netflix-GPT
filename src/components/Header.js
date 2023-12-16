import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }
  return (
    <div className='absolute w-full px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            alt='logo'
        />
        <div className='flex p-2 '>
          <img className='w-8 h-8 m-2 rounded-md shadow-lg'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6JDnnyEO4kbiGGzRAzRyxRDgoaDJ_UWwdz3LLKsLMXHa4duef7HSgrYqJONVpDSOYFg&usqp=CAU'
            alt='userImg'
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