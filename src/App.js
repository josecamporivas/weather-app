import { useEffect, useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import ForecastList from './components/ForecastList/ForecastList';
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  
  const [location, setLocation] = useState({
    description: 'Madrid, España',
    lat: 40.4167754,
    lng: -3.7037902
  })

  const [weather, setWeather] = useState(null)
  const [forecastArray, setForecastArray] = useState(null)
  
  const URL_API_ACTUAL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${process.env.REACT_APP_API_KEY_FORECAST}`
  const URL_API_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lng}&appid=${process.env.REACT_APP_API_KEY_FORECAST}`

  useEffect(() => {
    fetch(URL_API_ACTUAL_WEATHER)
    .then((data) => data.json())
    .then(results => {
      setWeather(results)
      console.log(results)
    })

    fetch(URL_API_FORECAST)
    .then((data) => data.json())
    .then(results => {
      setForecastArray(results.list)
      console.log(results)
    })

  }, [location, URL_API_ACTUAL_WEATHER, URL_API_FORECAST])
  
  return (
    <div className='min-h-screen flex flex-col gap-2 items-center bg-slate-800'>
      <SearchInput setLocation={setLocation} />
      {weather ? 
      <CurrentWeather weather={weather} /> : <></>}
      {forecastArray ?
      <ForecastList forecastArray={forecastArray} /> : <></>}
    </div>
  );
}

export default App;
