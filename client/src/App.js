import React, { useState } from 'react'
// import './App.css';
import WaterTemp from './components/WaterTemp'
import Tide from './components/Tide'
import GetLocation from './components/GetLocation'
import UserInputForm from './components/UserInputForm'
import Reload from './components/Reload'

import Weather from './components/Weather'
// import LineChart from './components/LineChart'

import StateContext from './components/StateProvider'
function App() {
  const [ userLocation, setUserLocation ] = useState([])
  const [ userClosestNOAAStation, setUserClosestNOAAStation ] = useState({})
  const [ userClosestCDECStation, setUserClosestCDECStation] = useState()
  const [ waterTempData, setwaterTempData ] = useState(null)
  const [ userWaterTemp, setUserWaterTemp ] = useState()
  const [ tideData, setTideData ] = useState([]);
  const [ submitData, setSubmitData] = useState([])
  const [ openWeatherData, setOpenWeatherData ] = useState()


  return (
    <div className="App">
      <StateContext.Provider
        value={{
          userLocation,
          setUserLocation,
          userClosestNOAAStation,
          setUserClosestNOAAStation,
          tideData,
          setTideData,
          submitData,
          setSubmitData,
          openWeatherData,
          setOpenWeatherData,
          userClosestCDECStation,
          setUserClosestCDECStation,
          waterTempData,
          setwaterTempData,
          userWaterTemp,
          setUserWaterTemp
        }}>
      <GetLocation />
      <Weather />
      <WaterTemp />
      <Tide />
      <Reload />
      <UserInputForm />

      </StateContext.Provider>



    </div>
  );
}

export default App;


// {
//   date: ,
//   time: ,
//   weather description: ,
//   userLocation: {
//     lat: ,
//     lon:
//   },
//   closestNOAA: {
//     id:
//     name:
//     lat ,
//     lon ,
//   },
//   closestCDEC: {
//     id: ,
//     name: ,
//     lat: ,
//     lon
//   },
//   waterTemp: {station, id, temp,},
//   airTemp: ,
//   windSpeed: ,
//   tide : ???? ,
//   lure: ???,
//   caughtAtFeet: ???,
//   retrieverSpeed: [low, mid, high],
//   fishLength: how many inches,
//   fishWeight: 1.7lbs
// }