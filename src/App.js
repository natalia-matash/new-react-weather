import React, { useState} from 'react';
import './App.css';
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';
import FormatDate from './FormatDate';

 export default function App() {
  let[weatherData, setWeatherData] = useState({ready: false});
     function handleResponse(response){
        setWeatherData({
          ready: true,
          city: response.data.name,
          temperature: Math.round(response.data.main.temp),
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
        });
     }

     if(weatherData.ready){
  return (
    <div className="App">
      <div className='container'>
      <div className='app__content'>
        <form>
          < div className='row'>
            <div className='col-9'>
            <input type="search" class="form-control" placeholder='Type your city...'/>
            </div>
            <div className='col-3'>
            <input type="submit" class="btn btn-primary" value='Search'/>
            </div>
          </div>
        </form>
        <div className="info">
         <div>
           <h1 className="city">{weatherData.city}</h1>
           <div className='city__info'>
            <ul>
               <li><FormatDate date={weatherData.date} /></li>
               <li>{weatherData.description}</li>
               <li>Humidity: {weatherData.humidity}%</li>
               <li>Wind: {weatherData.wind}km/h</li>
            </ul>
            <span>{weatherData.temperature}<sup>&deg;C</sup></span>
           </div>
         </div>
      </div>
      </div>
      </div>
    </div>
  );
     } else
     {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=0511a6e92a8692a228d7c70698a18f5d&units=metric`;
      axios.get(apiUrl).then(handleResponse);
      return <SpinnerCircular />
     }
}

