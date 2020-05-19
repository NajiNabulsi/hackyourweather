import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  jsonFile from "./city-weather.json";

ReactDOM.render(
  <React.StrictMode>
    <App prop ={jsonFile}/>
  </React.StrictMode>,
  document.getElementById('root')
);

