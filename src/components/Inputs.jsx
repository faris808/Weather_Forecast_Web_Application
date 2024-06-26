import React, { useState } from "react";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";
import UilMapMarkerAlt from "@iconscout/react-unicons/icons/uil-map-marker-alt";
import { toast } from "react-toastify";
const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
        toast.info('Fetching users location.');
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center lg:my-6 sm:my-1 md:my-1">
      <div className="flex flex-row items-center justify-center w-3/4 lg:space-x-4 sm:space-x-1 md:space-x-1">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="lg:text-xl sm:text-xs md:text-xs lg:font-light sm:font-thin md:font-thin p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size="25"
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilMapMarkerAlt
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row items-center justify-center lg:w-1/4 sm:w-1/5 md:w-1/5">
        <button
          name="metric"
          className="lg:text-xl sm:text-xs md:text-xs lg:font-light sm:font-thin md:font-thin text-white transition ease-out hover:scale-125" onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="lg:text-xl sm:text-xs md:text-xs text-white mx-1">|</p>
        <button
          name="imperial"
          className="lg:text-xl sm:text-xs md:text-xs lg:font-light sm:font-thin md:font-thin text-white transition ease-out hover:scale-125" onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
};
export default Inputs;
