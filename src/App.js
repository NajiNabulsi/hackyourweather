import React from "react";
import "./App.css";
import WeatherCard from './WeatherCard.js'

function App({prop}) {
  return (
    <div className="App">
     
{prop.map((ele, i) =>(
      <WeatherCard key={i} n={ele}/>
      ))}
    </div>
  );
}

export default App;
