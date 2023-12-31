import React from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice'; 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES, USER_IMG } from '../utils/constants';
import { toggleSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
    // console.log(e.target.value)
  }

  const handleGptSearchClick = () =>{
    //toggle search button
    dispatch(toggleSearchView()); 
  }

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
    <div className='absolute w-full px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between
     lg:bg-black sm:bg-blue-900 md:bg-green-900 '>
        <img className='w-44 mx-auto md:mx-0'
            alt='logo'
            src={NETFLIX_LOGO}
        />
        <div className='flex p-2 justify-between'>
          {showGptSearch && (
          <select className='p-2 bg-slate-300 rounded-md m-2' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>
          )}
          
          <button className='py-2 px-4 m-2 bg-purple-900 rounded-md text-white'
            onClick={handleGptSearchClick}>
            {showGptSearch ? "Home Page" : "Gpt Search"}
          </button>
          <img className='hidden md:block w-10 h-10 m-2 rounded-md shadow-lg'
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