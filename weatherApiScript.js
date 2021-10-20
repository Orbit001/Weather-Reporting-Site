
const APIkey = "ab1575ee1ccdc121fcad7be6bd5e5ed5"
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

var now = new Date().getTime();

var Date6input = now + (1000 * 60 * 60 * 24 * 5);
var Date6 = new Date(Date6input);
var x = Date6.toDateString().length;
var result6 = Date6.toDateString() + Date6.toString().substring(x,x+9);

var Date5input = now + (1000 * 60 * 60 * 24 * 4);
var Date5 = new Date(Date5input);
var x = Date5.toDateString().length;
var result5 = Date5.toDateString() + Date5.toString().substring(x,x+9);

var Date4input = now + (1000 * 60 * 60 * 24 * 3);
var Date4 = new Date(Date4input);
var x = Date4.toDateString().length;
var result4 = Date4.toDateString() + Date4.toString().substring(x,x+9);

var Date3input = now + (1000 * 60 * 60 * 24 * 2);
var Date3 = new Date(Date3input);
var x = Date3.toDateString().length;
var result3 = Date3.toDateString() + Date3.toString().substring(x,x+9);

var Date2input = now + (1000 * 60 * 60 * 24 * 1);
var Date2 = new Date(Date2input);
var x = Date2.toDateString().length;
var result2 = Date2.toDateString() + Date2.toString().substring(x,x+9);


function GCN() {
    const cityEl = document.getElementById("nameofcity");
    const TempEl = document.getElementById("temperature");
    const windEl = document.getElementById("wind");
    const UVEl = document.getElementById("UV");
    const humidityEl = document.getElementById("humidity");
    const Forecast1 = document.getElementById("day1")
    const Forecast2 = document.getElementById("day2")
    const Forecast3 = document.getElementById("day3")
    const Forecast4 = document.getElementById("day4")
    const Forecast5 = document.getElementById("day5")

    var names = document.getElementById("Cityfetch").value;


    var yessirs = [JSON.parse(localStorage.getItem('Cityhis'))];

    result21 = result2.substring(0, result2.length -8);
    result31 = result3.substring(0, result3.length -8);
    result41 = result4.substring(0, result4.length -8);
    result51 = result5.substring(0, result5.length -8);
    result61 = result6.substring(0, result6.length -8);

    yessirs.push(names);
    localStorage.setItem("Cityhis", JSON.stringify(yessirs));
  
    var retrievedData = localStorage.getItem("Cityhis");
    var searches = JSON.parse(retrievedData);


    // Takes City Name down
    var CityName = document.getElementById('Cityfetch').value;
   
    
    // Uses city name input and inserts into initial api which returns longitude+latitude
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + CityName + "&appid=" + APIkey+ "&units=imperial";
    fetch(queryURL)
        .then(function (response) {
            return response.json();
    })
    // Takes longitude and Latitude data from first API call and fetchs the ONECALLAPI which provides all necessary information
    .then(function (data) {
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        let queryurlRest = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" +  lon + "&exclude=hourly,minutely&appid=" + APIkey + "&units=imperial";

    fetch(queryurlRest)
    .then(response => response.json())
    .then(_data => {
        console.log(_data)
        let temp = _data.current.temp;
        let wind = _data.current.wind_speed;
        let UV = _data.current.uvi;
        let humidity = _data.current.humidity;
        let description = _data.current.weather[0].description;
        let icon = _data.current.weather[0].icon;
              


        let temp2 = _data.daily[0].temp.day;
        let UV2 = _data.daily[0].uvi;
        let humidity2 = _data.daily[0].humidity;
        let wind2 = _data.daily[0].wind_speed;
        let icon2 = _data.daily[0].weather[0].icon;

        let temp3 = _data.daily[1].temp.day;
        let UV3 = _data.daily[1].uvi;
        let humidity3 = _data.daily[1].humidity;
        let wind3 = _data.daily[1].wind_speed;
        let icon3 = _data.daily[1].weather[0].icon;

        let temp4 = _data.daily[2].temp.day;
        let UV4 = _data.daily[2].uvi;
        let humidity4 = _data.daily[2].humidity;
        let wind4 = _data.daily[2].wind_speed;
        let icon4 = _data.daily[2].weather[0].icon;

        let temp5 = _data.daily[3].temp.day;
        let UV5 = _data.daily[3].uvi;
        let humidity5 = _data.daily[3].humidity;
        let wind5 = _data.daily[3].wind_speed;
        let icon5 = _data.daily[3].weather[0].icon;

        let temp6 = _data.daily[4].temp.day;
        let UV6 = _data.daily[4].uvi;
        let humidity6 = _data.daily[4].humidity;
        let wind6 = _data.daily[4].wind_speed;
        let icon6 = _data.daily[4].weather[0].icon;



        if (UV< 4) {
            document.getElementById("UV").style.backgroundColor = 'green';
        }
        else if (UV < 8) {
            document.getElementById("UV").style.backgroundColor = 'orange';
        }
        else {
            document.getElementById("UV").style.backgroundColor = 'red';
        }
        


        document.getElementById("current-pic").setAttribute("src","https://openweathermap.org/img/wn/" + icon + "@2x.png")
        document.getElementById("current-pic").setAttribute("alt",description );
        cityEl.innerHTML = CityName +"  "+ dd + "/" + mm + "/" + yyyy ;
        TempEl.innerHTML ="Current Temperature:  " + temp + "F";
        windEl.innerHTML = "Wind Speed:   " + wind + "MPH";
        UVEl.innerHTML = "UV Index:   " +  UV;
        humidityEl.innerHTML ="Humidity:  "+ humidity+"%";

        
        Forecast1.innerHTML = result21;
        document.getElementById("pic2").setAttribute("src","https://openweathermap.org/img/wn/" + icon2 + "@2x.png")
        document.getElementById("temperature1").innerHTML = "Temperature:  " + temp2+ "F";
        document.getElementById("wind1").innerHTML = "Wind Speed:  " +wind2+ "MPH";
        document.getElementById("UV1").innerHTML = "UV Index:  "  +UV2;
        document.getElementById("humidity1").innerHTML ="Humidity:  " + humidity2+ "%";

        Forecast2.innerHTML = result31 ;
        document.getElementById("pic3").setAttribute("src","https://openweathermap.org/img/wn/" + icon3 + "@2x.png")
        document.getElementById("temperature2").innerHTML ="Temperature:  " + temp3+ "F";
        document.getElementById("wind2").innerHTML ="Wind Speed:  " + wind3+ "MPH";
        document.getElementById("UV2").innerHTML ="UV Index:  "  + UV3;
        document.getElementById("humidity2").innerHTML ="Humidity:  " + humidity3+ "%";

        Forecast3.innerHTML = result41;
        document.getElementById("pic4").setAttribute("src","https://openweathermap.org/img/wn/" + icon4 + "@2x.png")
        document.getElementById("temperature3").innerHTML = "Temperature:  " +temp4+ "F";
        document.getElementById("wind3").innerHTML ="Wind Speed:  " + wind4+ "MPH";
        document.getElementById("UV3").innerHTML ="UV Index:  "  + UV4;
        document.getElementById("humidity3").innerHTML ="Humidity:  "+ humidity4+ "%";

        Forecast4.innerHTML = result51;
        document.getElementById("pic5").setAttribute("src","https://openweathermap.org/img/wn/" + icon5 + "@2x.png")
        document.getElementById("temperature4").innerHTML = "Temperature:  " +temp5+ "F";
        document.getElementById("wind4").innerHTML = "Wind Speed:  " +wind5+ "MPH";
        document.getElementById("UV4").innerHTML ="UV Index:  "  + UV5;
        document.getElementById("humidity4").innerHTML ="Humidity:  "+ humidity5+ "%";

        Forecast5.innerHTML = result61;
        document.getElementById("pic6").setAttribute("src","https://openweathermap.org/img/wn/" + icon6 + "@2x.png")
        document.getElementById("temperature5").innerHTML ="Temperature:  " + temp6+ "F";
        document.getElementById("wind5").innerHTML ="Wind Speed:  " + wind6;
        document.getElementById("UV5").innerHTML ="UV Index:  "  + UV6 ;
        document.getElementById("humidity5").innerHTML ="Humidity:  "+ humidity6 + "%";

    })
    })
    }
