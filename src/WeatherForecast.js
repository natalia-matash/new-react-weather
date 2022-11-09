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
   if(loaded){ console.log(forecast)
      return(
         <div className='WeatherForecast'>
            <div className='row'>
                        <div className='col'>
                          <WeatherForecastDay data={forecast[4]}/>   
                        </div> 
                        <div className='col'>
                          <WeatherForecastDay data={forecast[12]}/>   
                        </div> 
                        <div className='col'>
                          <WeatherForecastDay data={forecast[20]}/>   
                        </div> 
                        <div className='col'>
                          <WeatherForecastDay data={forecast[28]}/>   
                        </div> 
                        <div className='col'>
                          <WeatherForecastDay data={forecast[36]}/>   
                        </div> 

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