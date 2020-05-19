import React from "react";
import WeatherCard from "./WeatherCard"
export default function WeatherList({ prop }) {
  return (
    <div>
      {prop.map((ele, i) => (
        <WeatherCard key={i} country={ele} />
      ))}
    </div>
  );
}
