import React from 'react';
import DateTime from '../../components/datetime/DateTime';
import WeatherLoc from '../../components/weatherloc/WeatherLoc';

const GeneralInfo = () => {
  return (
    <div className='box-border container mt-10 mx-auto w-full h-72 min-h-min border border-slate-300 rounded-md flex flex-row justify-between items-end bg-weather-texture bg-no-repeat bg-center bg-cover'>
       <WeatherLoc />
       <DateTime /> 
    </div>
  )
}

export default GeneralInfo