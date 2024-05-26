import React from "react";
import { iconUrlFromCode } from "../services/WeatherServices";

const Forecast = ({ title, items }) => {
  return (
    <div>
      <div className="flex items-center justify-start lg:mt-6 sm:mt-2 md:mt-2">
        <p className="text-white lg:font-medium sm:font-thin md:font-thin sm:text-xs uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="lg:font-light sm:font-thin md:font-thin lg:text-sm sm:text-xs md:text-xs">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="lg:font-medium sm:font-thin md:font-thin">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Forecast;
