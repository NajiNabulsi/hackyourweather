import React from "react";

export default function WeatherCard({n}) {
  // console.log(naji.weather);
  
  return (
    <div className="weCard">
      <h1>{n.name}</h1>
      <h2>{n.weather[0].main}</h2>
      <h3>{n.weather[0].description}</h3>
      <h3>{n.main.temp_min}</h3>
      <h3>{n.main.temp_max}</h3>
    </div>
  );
}
