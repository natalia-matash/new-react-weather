import React from 'react';
import Weather from './Weather'
import './App.css';


 export default function App() {
  return(
    <div className='App'>
      <div className='container'>
        <Weather city='Lviv' />
        <footer>
          <p>This project was coded <strong>by Nataliyayaya</strong> and is <a href='https://github.com/Nataliyayaya/new-react-weather' target="_blank" without rel="noreferrer">open-sourced by GitHub</a></p>
        </footer>
      </div>
    </div>
  );
 }
