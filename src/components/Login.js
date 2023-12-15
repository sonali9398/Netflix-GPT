import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const[signIn, setSignIn] = useState(true);

    const toggleSignIn = () =>{
        setSignIn(!signIn);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img
                src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                alt='wallpaper'
            />
        </div>
        <form className='absolute p-12 w-4/12 my-20  bg-black mx-auto right-0 left-0 rounded-lg
        bg-opacity-80'>
            <div className=''>

                <h1 className=' font-semibold text-4xl py-4  text-white'>{signIn ? "Sign in" : "Sign Up"}</h1>
                {!signIn && (
                    <input type='text' placeholder='Enter Fullname' className='p-4 my-4 w-full bg-slate-200 rounded-lg'/>
                )}

                <input type='text' placeholder='Enter email' className='p-4 my-4 w-full bg-slate-200 rounded-lg'/>
                <input type='password' placeholder='Enter password' className='p-4 my-4 w-full bg-slate-200 rounded-lg'/>

                <button className=' text-white p-4 my-8 bg-red-700 w-full rounded-lg text-xl'>{signIn ? "Sign In" : "Sign Up"}</button>
                <p className='font-light text-lg cursor-pointer text-white' onClick={toggleSignIn}>
                   {signIn ? "New to Netflix? Sign Up Now" : "Already User? Sign In Now"}
                </p>
            </div>
           
        </form>
    </div>
  )
}

export default Login