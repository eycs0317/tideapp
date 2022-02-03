import { useState, useEffect, useContext } from 'react'
import './waterTemp.scss'
import StateContext from './StateProvider';

const WaterTemp = () => {

  const { waterTempData, setwaterTempData, userClosestCDECStation,userWaterTemp, setUserWaterTemp, setSubmitData } = useContext(StateContext)

  const fetchTempData = async () => {
    const res = await fetch('http://localhost:5000/watertemp')

    const data = await res.json()

    data.shift()
    data.shift()
    setwaterTempData(data)
  }
  const currentWaterTemp = () => {
    if(userClosestCDECStation && waterTempData) {
      let currTemp = waterTempData.filter(item => item.StationId === userClosestCDECStation.id
      )
      console.log('currTemp', currTemp)
      setUserWaterTemp(...currTemp)
      setSubmitData(prev => ({...prev, waterTemp: currTemp[0]}))
    }

  }

  useEffect(() => {
    fetchTempData()
  }, [userClosestCDECStation]);

  useEffect(() => {
    currentWaterTemp()
  }, [waterTempData]);


  return (
    <div>
      <div className="container">
      <h2>Water Temp Data <small>CA Delta</small></h2>
      <p>Data from https://cdec.water.ca.gov/</p>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">ID</div>
          <div className="col col-2">Station Name</div>
          <div className="col col-3">Date/Time</div>
          <div className="col col-4">Water Temp</div>
        </li>
    {/* {waterTempData ? waterTempData.map(item => {
      return (
      <li className="table-row" key={item.StationId}>
        <div className="col col-1" data-label="Station Id">{item.StationId}</div>
        <div className="col col-2" data-label="Station Name">{item.StationName}</div>
        <div className="col col-3" data-label="Time/Date">{item.timeAndDate}</div>
        <div className="col col-4" data-label="Temp">{item.waterTemp}</div>
      </li>
      )
    }) : null} */}
      {userWaterTemp ? <p>Current Water temp: {userWaterTemp.waterTemp}</p>: null}

  </ul>
</div>
    </div>

  )
}

export default WaterTemp