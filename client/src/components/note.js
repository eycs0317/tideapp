
With the station ID -
i can get the (lat,lng,name)
// https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations/9415193.json?type=tidepredictions&units=english
//have some call nearby

with the data and station id
i can get the high and low
https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&begin_date=20220126&end_date=20220128&datum=MLLW&station=9415193&time_zone=lst_ldt&units=english&interval=hilo&format=json&application=NOS.COOPS.TAC.TidePred

//function for distance
alert(calcCrow(59.3293371,13.4877472,59.3225525,13.4619422).toFixed(1));

    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    function calcCrow(lat1, lon1, lat2, lon2)
    {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value)
    {
        return Value * Math.PI / 180;
    }


    // build the data list
    name, lat,lon,
    San Joaquin River
    Antioch	9415064	+38.0200	-121.8150	Harmonic
    Threemile Slough entrance	9415193	+38.0867	-121.6850	Subordinate
    Prisoners Point	9415149	+38.0617	-121.5550	Subordinate

    Wards Island, Little Connection Slough	9415105	+38.0500	-121.4969	Subordinate
    Blackslough Landing	9415021	+37.9947	-121.4190	Subordinate
    Stockton	9414883	+37.9583	-121.2900	Subordinate

    Mokelumne River
    Georgiana Slough entrance	9415287	+38.1250	-121.5780	Subordinate
    Terminous, South Fork	9415257	+38.1100	-121.4980	Subordinate
    New Hope Bridge	9415478	+38.2267	-121.4900	Subordinate
    Bishop Cut, Disappointment Slough	9415117	+38.0450	-121.4200	Subordinate

    False River	9415145	+38.0550	-121.6570	Subordinate
    Dutch Slough	9415053	+38.0117	-121.6380	Subordinate
    Irish Landing, Sand Mound Slough	9415095	+38.0333	-121.5830	Subordinate
    Orwood, Old River	9414868	+37.9383	-121.5600	Subordinate
    Holt, Whiskey Slough	9414866	+37.9350	-121.4350	Subordinate
    Borden Highway Bridge, Old River	9414836	+37.8833	-121.5770	Subordinate
    Borden Highway Bridge, Middle River	9414835	+37.8917	-121.4880	Subordinate
    Borden Highway Bridge, San Joaquin River	9414367	+37.9367	-121.3333	Subordinate
    Grant Line Canal (drawbridge)	9414785	+37.8200	-121.4470	Subordinate

    Sacramento River
    Collinsville	9415176	+38.0733	-121.8480	Subordinate
    Threemile Slough	9415236	+38.1067	-121.7000	Subordinate
    Rio Vista	9415316	+38.1450	-121.6920	Harmonic
    Steamboat Slough, Snug Harbor Marina	9415414	+38.1833	-121.6550	Subordinate
    Snodgrass Slough	9415565	+38.2767	-121.4950	Subordinate
    Clarksburg	9415846	+38.4167	-121.5230	Subordinate
    Sacramento	9416174	+38.5800	-121.5070	Subordinate

    const stationInfo = [
      {
        name: 'Antioch',
        id: 9415064,
        lat: '+38.0200'
        lon: '-121.8150'
      },
      {
        name: 'Threemile Slough entrance',
        id: 	9415193,
        lat: '	+38.0867'
        lon: '	-121.6850'
      },
      {
        name: 'Prisoners Point',
        id: 9415149,
        lat: '+38.0617'
        lon: '-121.5550'
      },
      {
        name: 'Wards Island, Little Connection Slough',
        id: 9415105,
        lat: '+38.0500'
        lon: '-121.4969'
      },
      {
        name: 'Blackslough Landing',
        id: 9415021,
        lat: '+37.9947'
        lon: '-121.4190'
      },
      {
        name: 'Stockton',
        id: 9414883,
        lat: '+37.9583'
        lon: '-121.2900'
      },
      {
        name: 'Georgiana Slough entrance',
        id: 9415287,
        lat: '+38.1250'
        lon: '-121.5780'
      },
      {
        name: 'Terminous, South Fork',
        id: 9415257,
        lat: '+38.1100'
        lon: '-121.4980'
      },
      {
        name: 'New Hope Bridge',
        id: 9415478,
        lat: '+38.2267'
        lon: '-121.4900'
      },
      {
        name: 'Bishop Cut, Disappointment Slough',
        id: 9415117,
        lat: '+38.0450'
        lon: '-121.4200'
      },
      {
        name: 'False River',
        id: 9415145,
        lat: '+38.0550'
        lon: '-121.6570'
      },
      {
        name: 'Dutch Slough',
        id: 9415053,
        lat: '+38.0117'
        lon: '-121.6380'
      },
      {
        name: 'Irish Landing, Sand Mound Slough',
        id: 9415095,
        lat: '+38.0333'
        lon: '-121.5830'
      },
      {
        name: 'Orwood, Old River',
        id: 9414868,
        lat: '+37.9383'
        lon: '-121.5600'
      },
      {
        name: 'Holt, Whiskey Slough',
        id: 9414866,
        lat: '+37.9350'
        lon: '-121.4350'
      },
      {
        name: 'Borden Highway Bridge, Old River',
        id: 9414836,
        lat: '+37.8833'
        lon: '-121.5770'
      },
      {
        name: 'Borden Highway Bridge, Middle River',
        id: 9414835,
        lat: '+37.8917'
        lon: '-121.4880'
      },
      {
        name: 'Borden Highway Bridge, San Joaquin River',
        id: 9414367,
        lat: '+37.9367'
        lon: '-121.3333'
      },
      {
        name: 'Grant Line Canal (drawbridge)',
        id: 9414785,
        lat: '+37.8200'
        lon: '-121.4470'
      },
      {
        name: 'Collinsville',
        id: 9415176,
        lat: '+38.0733'
        lon: '-121.8480'
      },
      {
        name: 'Threemile Slough',
        id: 9415236,
        lat: '+38.1067'
        lon: '-121.7000'
      },
      {
        name: 'Rio Vista',
        id: 9415316,
        lat: '+38.1450'
        lon: '-121.6920'
      },
      {
        name: 'Steamboat Slough, Snug Harbor Marina1',
        id: 9415414,
        lat: '+38.1833'
        lon: '-121.6550'
      },
      {
        name: 'Snodgrass Slough',
        id: 9415565,
        lat: '+38.2767'
        lon: '-121.4950'
      },
      {
        name: 'Clarksburg',
        id: 9415846,
        lat: '+38.4167'
        lon: '-121.5230'
      },
      {
        name: 'Sacramento',
        id: 9416174 ,
        lat: '+38.5800'
        lon: '-121.5070'
      },
    ]