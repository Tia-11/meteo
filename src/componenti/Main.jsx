import React, { useState, useEffect } from 'react';
import search_icon from '../assets/search.png';
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'

const Main = () => {
    const [cityName, setCityName] = useState('Milano'); 
    const [weatherData, setWeatherData] = useState(null);
  
    useEffect(() => {
      fetchWeatherData('Milano');
    }, []); 

    const fetchWeatherData = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=74a9bcd19577ebc19658009309150bc3`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Errore HTTP!');
            }
            return response.json();
          })
          .then(data => {
            console.log(data)
            setWeatherData(data);
            setCityName('');
          })
          .catch(error => {
            console.error('Errore di fetch:', error);
          });
    }

    const search = () => {
        fetchWeatherData(cityName);
    }

    return (
        <div className='container2'>
            <div className='top-bar'>
                <input
                    type="text"
                    className='cityinput'
                    placeholder='Search'
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
                <div className='search-icon' onClick={() => search()}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            {weatherData && (
                <div>
                    <div className='weather-location'>
                        <p>{weatherData.name}</p>
                    </div>
                    <div className='weather-image'>
                        <p>{`${weatherData.weather[0].main}`}</p>
                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="" />
                    </div>
                    <div className='weather-temp'>
                        <p>{`${weatherData.main.temp}°F`}</p>
                    </div>
                    <div className='data-container'>
                        <div className='element'>
                            <img src={humidity_icon} alt="" className='icon' />
                            <div className="data">
                                <div className="humidity-percent">{`${weatherData.main.humidity}%`}</div>
                                <div className='text'>Humidity</div>
                            </div>
                        </div>
                        <div className='element'>
                            <img src={wind_icon} alt="" className='icon' />
                            <div className="data">
                                <div className="humidity-percent">{`${weatherData.wind.speed} km/h`}</div>
                                <div className='text'>Wind Speed</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Main;