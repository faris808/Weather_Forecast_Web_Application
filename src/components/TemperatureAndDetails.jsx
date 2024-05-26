import React from "react";
import UilTemperature from "@iconscout/react-unicons/icons/uil-temperature";
import UilTear from "@iconscout/react-unicons/icons/uil-tear";
import UilWind from "@iconscout/react-unicons/icons/uil-wind";
import UilSun from "@iconscout/react-unicons/icons/uil-sun";
import UilSunset from "@iconscout/react-unicons/icons/uil-sunset";
import { formatToLocalTime, iconUrlFromCode } from "../services/WeatherServices";
const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center text-cyan-300 lg:py-6 lg:text-xl sm:text-xs md:text-xs sm:py-3 md:py-2">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white lg:py-3 sm:py-1 md:py-1">
        <img src={iconUrlFromCode(icon)} alt="" className="lg:w-20 sm:w-10 md:w-10" />
        <p className="lg:text-5xl sm:text-xs md:text-xs">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col lg:space-y-2 sm:space-x-1 md:space-x-1">
          <div className="flex items-center justify-center lg:font-light lg:text-sm sm:font-thin md:font-thin sm:text-xs md:text-xs">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="lg:font-medium sm:font-thin md:font-thin ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex items-center justify-center lg:font-light lg:text-sm sm:font-thin md:font-thin sm:text-xs md:text-xs">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="lg:font-medium ml-1 sm:font-thin md:font-thin ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex lg:font-light lg:text-sm sm:font-thin md:font-thin sm:text-xs md:text-xs items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="lg:font-medium sm:font-thin md:font-thin ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center text-white lg:space-x-2 lg:text-sm lg:py-3 sm:space-x-1 md:space-x-1 sm:text-xs md:text-xs sm:py-1 md:py-1">
        <UilSun />
        <p className="lg:font-light sm:font-thin md:font-thin">
          Rise: <span className="lg:font-medium sm:font-thin md:font-thin ml-1">{formatToLocalTime(sunrise,timezone, "hh:mm a")}</span>
        </p>
        <p className="lg:font-light sm:font-thin md:font-thin">|</p>

        <UilSunset />
        <p className="lg:font-light sm:font-thin md:font-thin">
          Set: <span className="lg:font-medium sm:font-thin md:font-thin ml-1">{formatToLocalTime(sunset,timezone, "hh:mm a")}</span>
        </p>
        <p className="lg:font-light sm:font-thin md:font-thin">|</p>

        <UilSun />
        <p className="lg:font-light sm:font-thin md:font-thin">
          High: <span className="lg:font-medium sm:font-thin md:font-thin ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="lg:font-light sm:font-thin md:font-thin">|</p>

        <UilSun />
        <p className="lg:font-light sm:font-thin md:font-thin">
          Low: <span className="lg:font-medium sm:font-thin md:font-thin ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
};
export default TemperatureAndDetails;
