import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { WALLPAPER_IMG } from '../utils/constants';


const Login = () => {
    const[signIn, setSignIn] = useState(true);
    const[errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignIn = () =>{
        setSignIn(!signIn);
    }

    const handleButtonClick =() =>{
        //validate form data
        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;

        //signup and sign-in logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: name.current.value,
                 
              }).then(() => {
                // Profile updated!
                const{uid, email, displayName} = auth.currentUser;
                dispatch(
                    addUser({
                        uid:uid,
                        email:email,
                        displayName: displayName,
                    })
                )
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message);
              });
            //console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
        });
        
        // Sign in
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    };

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='h-screen object-cover'
                alt='wallpaper'
                src={WALLPAPER_IMG}
            />
        </div>
        <form className='absolute w-full p-12 md:w-4/12 my-20  bg-black mx-auto right-0 left-0 rounded-lg
        bg-opacity-80' onSubmit={(e) => e.preventDefault()}>
            <div className=''>

                <h1 className=' font-semibold text-4xl py-4  text-white'
                onClick={handleButtonClick}>
                    {signIn ? "Sign in" : "Sign Up"}
                </h1>
                {!signIn && (   
                    <input 
                     ref={name}
                    type='text'
                    placeholder='Enter Fullname' 
                    className='p-4 my-4 w-full bg-slate-200 rounded-lg'/>
                )}

                    <input 
                     ref={email}
                    type='text' 
                    placeholder='Enter email' 
                    className='p-4 my-4 w-full bg-slate-200 rounded-lg'
                    autoComplete="email"
                    required
                    />
                    <input 
                    ref={password}
                    type='password'
                    placeholder='Enter password' 
                    className='p-4 my-4 w-full bg-slate-200 rounded-lg'
                    autoComplete="current-password"
                    required
                    />
                <p className='  text-red-600'>{errorMessage}</p>
                <button className=' text-white p-4 my-8 bg-red-700 w-full rounded-lg text-xl'
                onClick={handleButtonClick}>
                    {signIn ? "Sign In" : "Sign Up"}
                </button>
                <p className='font-light text-lg cursor-pointer text-white' onClick={toggleSignIn}>
                   {signIn ? "New to Netflix? Sign Up Now" : "Already User? Sign In Now"}
                </p>
            </div>
           
        </form>
    </div>
  )
}

export default Login