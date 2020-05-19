import React from "react";

export default function WeatherCard({ country }) {
  // console.log(naji.weather);

  return (
    <div className="WeatherCard">
      <h1>
        {country.name}, {country.sys.country}
      </h1>
      <h2>{country.weather[0].main}</h2>
      <h3>{country.weather[0].description}</h3>
      <div className="WeatherCardInfo">
        <h3>min temp : {country.main.temp_min}</h3>
        <h3>max temp : {country.main.temp_max}</h3>
        <h3>
          loction : {country.coord.lat}, {country.coord.lon}
        </h3>
      </div>
    </div>
  );
}
