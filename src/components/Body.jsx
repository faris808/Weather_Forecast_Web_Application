import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import WeatherCard from "./WeatherCard";
import filterdata from "../utils/helper";
const Body = () => {
  const [searchtxt, setsearchtxt] = useState("");
  const [searchresult, setsearchresult] = useState("Ranchi");
  const [outputdata, setoutputdata] = useState([]);
  const [filtereddata,setfiltereddata]=useState([]);
  function fitdata(searchtxt) {
    setsearchresult(searchtxt);
  }
  useEffect(() => {
    getValues();
  }, [searchresult]);
  async function getValues() {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchresult}&units=metric&appid=2df0537381625f525e1e753fdcb5e2a9`
    );
    const json = await data.json();
    setoutputdata(json.list);
  }
  return (
    <div className="border-2 flex flex-col justify-center items-center border-blue-300 my-8">
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      <div className="relative">
        <input
          type="text"
          name=""
          className="w-[90vw] px-[25px] py-[12px] my-[8px] mx-[0px] inline-block box-border rounded-2xl outline-none"
          id=""
          placeholder="Enter a city...."
          value={searchtxt}
          onChange={(e) => setsearchtxt(e.target.value)}
        />
        <FontAwesomeIcon
          className="absolute right-[25px] top-[25px] cursor-pointer"
          icon={faMagnifyingGlass}
          onClick={() => {
            fitdata(searchtxt);
            const receiveddata=filterdata(outputdata);
            {console.log(receiveddata)}
            setfiltereddata(receiveddata);
          }}
        />
      </div>
      {console.log(filtereddata)}
      <div className="w-[90vw] h-96 rounded-2xl border-2 border-black">
        {outputdata?.map((weather, index) => {
          return <WeatherCard {...weather.weather[0]} {...weather.main} key={weather.id}/>;
        })}
      </div>
    </div>
  );
};
export default Body;

/*{outputdata?.map((weather,index) => {
  return (
    <WeatherCard {...weather.main} key={index} />
  );
})}*/
