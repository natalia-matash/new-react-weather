import React from 'react';
import FormatDate from './FormatDate';
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
         <img src={props.data.iconUrl} alt='weather icon'/>
      <span>{props.data.temperature}<sup>&deg;C</sup></span>
      </div>
     </div>
   </div>
  </div>
  );
}