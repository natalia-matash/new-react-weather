import React , { useState } from 'react';
import WeatherForecastDay from './WeatherForecastDay';
import axios from 'axios';

export default function WeatherForecast(props){
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);

   function handleResponse(response){
      setForecast(response.data.list);
      setLoaded(true);
   }
   if(loaded){
      return(
         <div className='WeatherForecast'>
            <div className='row'>
             <WeatherForecastDay data={forecast[0]}/>    
            </div>
         </div>
      )
   }
   else{
      let lon = props.coordinates.lon;
      let lat = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0511a6e92a8692a228d7c70698a18f5d&units=metric`;
      axios.get(apiUrl).then(handleResponse);
      return null;
   }
 
  
}