const WeatherCard = (desc,main_data) => {
    const {icon,description}=desc;
    const {temp,temp_max,temp_min}=main_data;
    return (
        <div className="w-40 mx-10 my-5 p-1">
            <div>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
                    <h2>{desc.temp}</h2>
                    <h2>{desc.feels_like}</h2>
                    <h2>{desc.description}</h2>
                    <h2>{desc.pressure}</h2>
                    <h2>{desc.humidity}</h2>
                </div>
                <div>

                </div>
            </div>
            {/* <h1>Temperature is:- +{temp}</h1>
            <h2>Max temperature is:- +{temp_max}</h2>
            <h2>Min temperature is:- +{temp_min}</h2>
            <h2>Pressure is:- +{pressure}</h2>
            <h2>Humidity is:- +{humidity}</h2> */}
        </div>
    )
};
export default WeatherCard;
