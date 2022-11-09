import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecastDay.css';

export default function WeatherForecastDay(props){
   function maxTemperature(){
      let temperature = Math.round(props.data.main.temp_max);
     return `${temperature}°`;
   }
   // function minTemperature(){
   //    let temperature = Math.round(props.data.main.temp_min);
   //    return `${temperature}°`;
   // }
   function day(){
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay();
      let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
     
      return days[day]
   }
   
   return(
           <div  className='WeatherForecastDay'>
              <div className='day'>{day()}</div> 
              <WeatherIcon code={props.data.weather[0].icon} size={30} />
               <div className='temp'>
                 <span className='max'>{maxTemperature()}</span>
                 {/* <span className='min'>{minTemperature()}</span> */}
               </div>
           </div>
   );
} 