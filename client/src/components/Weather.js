import { useContext, useEffect } from 'react'
import StateContext from './StateProvider';
import axios from 'axios'
import { convertTime } from '../utils/convertTimestamp'


const Weather = () => {

  const { openWeatherData, setOpenWeatherData, userLocation, setSubmitData } = useContext(StateContext)

  const fetchWeatherData = async () => {

    const response = await axios.get('http://localhost:5000/weather', {params:
      // {lat: 37.806306 , lon: -122.465889}
      {lat: userLocation[0], lon: userLocation[1]}
    })

    // console.log('data', response.data)
    let sunrise = response.data.sys.sunrise;
    let sunset = response.data.sys.sunset
    response.data.sys.sunrise = convertTime(sunrise)
    response.data.sys.sunset = convertTime(sunset)
    setOpenWeatherData(response.data)
    setSubmitData(prev => ({...prev, weather: response.data}))
  }
  useEffect(() => {
    fetchWeatherData()
  },[userLocation])
  return (
    <div>
      <h1>This is Weather section</h1>
      <p>Date from openweather. base on lat and lon</p>
      {openWeatherData ?
      <div>
      <p>Current airtemp: {openWeatherData.main.temp}</p>
      <p>Current WindSpeed: {openWeatherData.wind.speed}MPH</p>
      <p>Current description: {openWeatherData.weather[0].description}</p>
      <p>Current humidity: {openWeatherData.main.humidity}%</p>
      <p>Current pressure: {openWeatherData.main.pressure} hPa</p>
      <p>Sunrise: {openWeatherData.sys.sunrise}AM</p>
      <p>Sunset: {openWeatherData.sys.sunset}PM</p>
      </div> :
      <p>Loading</p>
      }

    </div>
  )
}

export default Weather;