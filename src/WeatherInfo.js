import './WeatherInfo.css'

export default function WeatherInfo(){
   return(
      <div className="WeatherInfo">
         <div>
           <h1 className="city">Kyiv</h1>
           <div className='city__info'>
            <ul>
               <li>Sunday 10:25</li>
               <li>Fog</li>
               <li>Humidity: 80%</li>
               <li>Wind: 2km/h</li>
            </ul>
            <span>9<sup>&deg;C</sup></span>
           </div>
         </div>
      </div>
   )
}