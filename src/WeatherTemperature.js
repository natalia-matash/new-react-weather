import React, { useState } from 'react';

export default function WeatherTemperature(props){
   const [unit, setUnit] = useState('celsius');

   function showFahrenheit(event){
      event.preventDefault();
      setUnit('fahrenheit');
   }
   function showCelsius(event){
      event.preventDefault();
      setUnit('celsius');
   }

   if(unit === 'celsius'){
      return(
         <div className='WeatherTemperature'>
            <span className='temperature'>{props.celsius}</span>
            <sup>&deg;C | <a href='/' onClick={showFahrenheit}>&deg;F</a></sup>
         </div>
      );
   } 
   else{
      let fahrenheit = Math.round(props.celsius * 9 / 5 + 32);
      return(
         <div className='WeatherTemperature'>
            <span className='temperature'>{fahrenheit}</span>
            <sup><a href='/' onClick={showCelsius}>&deg;C</a> | &deg;F</sup>
         </div>
      );

   }
}