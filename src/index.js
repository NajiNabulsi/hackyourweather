import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  jsonFile from "./city-weather.json";

ReactDOM.render(
  <React.StrictMode>
    <App prop ={jsonFile}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
