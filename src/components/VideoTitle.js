import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='font-bold text-6xl text-white w-1/2'>{title}</h1>
      <p className='hidden md:inline-block text-base w-1/2 py-6'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='bg-white text-black md:py-4 py-1 rounded-md shadow-md px-12 p-4 text-xl hover:bg-opacity-20 hover:text-white'>Play</button>
        <button className='bg-gray-300 mx-2 text-white hidden md:inline-block  rounded-md shadow-md px-12 p-4 text-xl bg-opacity-20'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle