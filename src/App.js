import './App.css';
import WeatherInfo from './WeatherInfo';

function App() {
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
        <WeatherInfo />
      </div>
      </div>
    </div>
  );
}

export default App;
