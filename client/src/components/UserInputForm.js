
import { useContext, useState } from 'react'
import StateContext from './StateProvider';
import axios from 'axios'


const UserInputForm = () => {
  const { submitData, setSubmitData } = useContext(StateContext)

  const [userData, setUserData] = useState({})

  const onChangeHandler = (e) => {
    console.log('onchange', e.target.name)
    let { name, value } = e.target
    setUserData(prev => ({...prev, [name]: value}))
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log('click')
    setSubmitData(prev => ({...prev, userData}))
    const response = axios.post('http://localhost:5000/upload', submitData)
  }
  return (
    <div>
    <h1>this is userinput form</h1>
      <form onSubmit={onSubmitHandler}>
        <h2>User Input section:</h2>
        <div>
          <label>What type of Lure?</label>
          <input
            required
            type='text'
            name='lure'
            onChange={onChangeHandler}>
          </input>
        </div>
        <div>
          <label>How many feet?</label>
          <select
            required
            value={userData.feet}
            name='feet'
            onChange={onChangeHandler}>
            <option> -- Select Feet --</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10+</option>
          </select>
        </div>
        <div>
          <label>Retriever Speed?</label>
          <select
            required
            value={userData.speed}
            name='speed'
            onChange={onChangeHandler}>
            <option> -- Select Speed --</option>
            <option>Slow</option>
            <option>Average</option>
            <option>Fast</option>
          </select>
        </div>
        <div>
          <label>Fish weight?(lbs)</label>
          <input
            required
            value={userData.weight}
            name='weight'
            onChange={onChangeHandler}>
          </input>
        </div>
        <div>
          <label>Fish Length?</label>
          <input
            required
            value={userData.length}
            name='length'
            onChange={onChangeHandler}>
          </input>
        </div>
        <button>Upload all data</button>
      </form>
    </div>
  )
}

export default UserInputForm;

// {
//   date: 01/01/2021,
//   time: 13:00,
//   location: [lan, lon],
//   windspeed: 10,
//   airTemp: 10,
//   waterTemp: 53,
//   tide: {
//     feet: 1.4,
//     inComing: true/flase
//   },
//   lure: ???,
//   caughtAtFeet: ???,
//   retrieverSpeed: [low, mid, high],
//   fishLength: how many inches,
//   fishWeight: 1.7lbs
// }