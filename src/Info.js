import React from 'react';
import FormatDate from './FormatDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import './Info.css';

export default function Info(props){
   return(
   <div className="Info">
    <div>
     <h1 className="city">{props.data.city}</h1>
     <div className='city__info'>
      <ul>
         <li><FormatDate date={props.data.date} /></li>
         <li>{props.data.description}</li>
         <li>Humidity: {props.data.humidity}%</li>
         <li>Wind: {props.data.wind}km/h</li>
      </ul>
      <div className='temp'>
         <WeatherIcon code={props.data.icon} size={52}/>
         <WeatherTemperature celsius={props.data.temperature}/>
      </div>
     </div>
   </div>
  </div>
  );
}