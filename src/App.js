import React from "react";
import "./App.css";
import WeatherList from './WeatherList.js'

function App({prop}) {
  return (
    <div className="App">
     <h1>Weather</h1>
    < WeatherList prop={ prop }/>
    </div>
  );
}

export default App;
