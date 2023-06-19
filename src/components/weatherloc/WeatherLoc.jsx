import React from 'react';
import { WiDaySunny } from "react-icons/wi";

const WeatherLoc = () => {
  return (
    <div className='p-6 m-6  w-1/6 rounded-md flex flex-col items-center gap-3 bg-stone-600/90'>
      <div className='w-16 h-16'>
        <WiDaySunny className='w-full h-full fill-zinc-100'/>
      </div>
      <p className='text-7xl text-zinc-100'>13C</p>
      <p className=' text-zinc-100'>London, GB</p>
    </div>
  )
}

export default WeatherLoc