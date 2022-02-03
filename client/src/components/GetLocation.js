import { useEffect, useContext } from 'react'
import StateContext from './StateProvider';
import { stationInfoNOAA, stationInfoCDEC } from '../utils/station'
import { calcCrow, toRad } from '../utils/distanceCalculate'

const GetLocation = () => {
  const { userLocation, setUserLocation, userClosestNOAAStation, setUserClosestNOAAStation, userClosestCDECStation, setUserClosestCDECStation, setSubmitData } = useContext(StateContext)




  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude

      setUserLocation([latitude, longitude])
      setSubmitData(prev => ({currentLocation: {latitude, longitude}}))
    });
  },[])

  useEffect(() => {
    function findClosestNOAAStation() {
      let closestDis = Number.MAX_VALUE
      let closestName = ''
      let id = ''
      for(let i = 0; i < stationInfoNOAA.length; i++) {
        const distance = calcCrow(userLocation[0],userLocation[1], stationInfoNOAA[i].lat, stationInfoNOAA[i].lon)
        if(distance < closestDis) {

          closestDis = distance
          closestName = stationInfoNOAA[i].name
          id = stationInfoNOAA[i].id
        }
      }
      setUserClosestNOAAStation({closestDis, closestName, id})
      setSubmitData(prev => ({...prev, closestNOAA: {closestDis, closestName, id}}))
    }

    function findClosestCDECStation() {
      let closestDis = Number.MAX_VALUE
      let closestName = ''
      let id = ''
      for(let i = 0; i < stationInfoCDEC.length; i++) {
        const distance = calcCrow(userLocation[0],userLocation[1], stationInfoCDEC[i].lat, stationInfoCDEC[i].lon)
        if(distance < closestDis) {

          closestDis = distance
          closestName = stationInfoCDEC[i].name
          id = stationInfoCDEC[i].id
        }
      }
      setUserClosestCDECStation({closestDis, closestName, id})
      setSubmitData(prev => ({...prev, closestCDEC:{closestDis, closestName, id}}))
    }

    findClosestNOAAStation()
    findClosestCDECStation()
  },[userLocation])

  return (
    <div>
      <h1>this is getlocation components</h1>
      <p>User location : {userLocation}</p>
      {userClosestNOAAStation ? <p>User Closest NOAA Station/location : {userClosestNOAAStation.closestDis} {userClosestNOAAStation.closestName} {userClosestNOAAStation.id}</p> : null}
      {userClosestCDECStation ? <p>User Closest CDEC Station/location : {userClosestCDECStation.closestDis} {userClosestCDECStation.closestName} {userClosestCDECStation.id}</p> : null}

    </div>
  )
}

export default GetLocation;