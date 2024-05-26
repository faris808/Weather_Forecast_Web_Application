import React from 'react'
import { formatToLocalTime } from '../services/WeatherServices';

const TimeAndLocation=({ weather: { dt, timezone, name, country } })=>{
  return (
    <div>
        <div className="flex items-center justify-center lg:my-6 sm:my-1 md:my-1">
            <p className="text-white lg:text-xl lg:font-extralight sm:text-xs sm:font-thin md:text-xs sm:font-thin">{formatToLocalTime(dt)}</p>
        </div>
        <div className="flex items-center justify-center lg:my-3 sm:my-1 md:my-1">
            <p className="text-white lg:text-3xl lg:font-medium sm:text-xs sm:font-thin md:text-xs sm:font-thin">{`${name}, ${country}`}</p>
        </div>
    </div>
  )
};
export default TimeAndLocation;