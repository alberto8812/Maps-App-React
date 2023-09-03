import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MapsApp } from './MapsApp';


if(!navegator.geolocation){
  alert('tu navegador no tiene  opcion de geolocation');
  throw new Error(´tu navegador no tiene  opcion de geolocation´);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <MapsApp/>
  </React.StrictMode>
);

