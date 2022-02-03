import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StateContext from './StateProvider';
const Tide = () => {
  const { tideData, setTideData, setSubmitData } = useContext(StateContext)
  const url = 'https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&datum=MLLW&station=9415145&time_zone=lst_ldt&units=english&interval=hilo&format=json&product=predictions&date=today&station=9415064&time_zone=lst_ldt&interval=1&application=eddietesting'
  const fetchTideData = async () => {
    const res = await axios.get(url)
    setTideData(res.data.predictions)
    setSubmitData(prev => ({...prev, tide: res.data.predictions}))
  }

  useEffect(() => {
    fetchTideData()
  },[])

  return (
    <div>
      <h1>Tideeeee!!!</h1>
      {tideData.length ?       tideData.map((item, index) => {
        return <p key={index} >{item.t} {item.v} {item.type}</p>
      }) : null}


    </div>
  )
}

export default Tide;