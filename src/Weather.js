import React, { useState} from 'react';
import axios from 'axios';
import Info from './Info';
import './Weather.css';

 export default function Weather(props){
   const [city, setCity] = useState(props.city);
   const [weatherData, setWeatherData] = useState({ready: false});

   function handleResponse(response){
      setWeatherData({
        ready: true,
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
      });
   }

   function search(){
    let apiKey = '0511a6e92a8692a228d7c70698a18f5d';
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
   }
   function handleSubmit(event){
      event.preventDefault();
      search();
   }
   function showCity(event){
      setCity(event.target.value);
   }

     if(weatherData.ready){
  return (
    <div className="Weather">
        <form onSubmit={handleSubmit}>
          < div className='row'>
            <div className='col-9'>
            <input type="search" class="form-control" placeholder='Type your city...' onChange={showCity}/>
            </div>
            <div className='col-3'>
            <input type="submit" class="btn btn-primary" value='Search'/>
            </div>
          </div>
        </form>
        <Info data={weatherData}/>
      </div>
  );
     } else
     {
      search();
      return(
        <div className="Weather">
          <p>Loading...</p>
        </div>
      ); 
        
    
     }
}

