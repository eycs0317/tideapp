const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var fs = require('fs');
var cors = require('cors')
const cheerio = require('cheerio');
const axios = require('axios')

app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello')
})
app.get('/watertemp', (req, res) => {
  //https://www.westernbass.com/delta/water

  axios.get('https://cdec.water.ca.gov/cgi-progs/getAll?sens_num=25&get_basin=8101&sort=')
    .then(function(response) {
      // console.log('res', response)
      var data = cheerio.load(response.data)
      var results = [];
      // console.log('data',data)

  data("tr").each(function(i, element) {

    var all = data(element).text();
    // var secondEle = data(element).find('td').first()
    var StationName = data(element).children().first().text();
    var StationId = data(element).children().eq(1).text().trim();
    var elevation = data(element).children().eq(2).text();
    var timeAndDate = data(element).children().eq(3).text();
    var waterTemp = data(element).children().eq(4).text();
    // var eq5 = data(element).children().eq(5).text();
    results.push({
      all: all,
      StationName: StationName,
      StationId,StationId,
      elevation: elevation,
      timeAndDate: timeAndDate,
      waterTemp: waterTemp,
    });
    }).toArray()

    // console.log(results);
    res.send(results)
})
// res.send('helllloofdsafdasfasdoooo')
})

app.get('/weather', (req, res) => {
  const API_KEY = '676165cbb7e4501a39986378002e67ff'
  // console.log('req', req.query)
  let { lat, lon } = req.query
  // let lat = 37.806306
  // let lon = -122.465889
  let url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${API_KEY}`
  // console.log('url',url)
  axios.get(url)
  .then(function(response) {
    // console.log('response from openweathermap', response.data)
    const airTemp = response.data.main.temp;
    const windSpeed = response.data.wind.speed
    const description = response.data.weather[0].description
    const { weather, main, wind, sys } = response.data
    // const date = new Date(response.sys.sunrise)
    // console.log('date', date)
    res.send({weather, main, wind, sys})
    // res.send('heeeeeeee')
  })
  .catch(function (err) {
    console.log('err ----->', err)
  })
  // res.send('from backend windandair')
})

app.post('/upload', (req, res) => {
  console.log('reqbody', req.body)
  res.send('hiiiiii')
})



// app.get('/express_backend', (req, res) => { //Line 9
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// }); //Line 11


app.listen(port, () => console.log(`Listening on port ${port}`));