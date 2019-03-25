function checkWeather(town) {
    let townInfo = "";
    if (town == "salem") {
        townInfo = 'https://api.openweathermap.org/data/2.5/weather?id=5750162&appid=2dc961d7969a3deedf5172330221b7f2&units=imperial';
        document.getElementById("townName").innerHTML = "Salem";
    }
    else if (town == "sisters") {
        townInfo = 'https://api.openweathermap.org/data/2.5/weather?id=5752129&appid=2dc961d7969a3deedf5172330221b7f2&units=imperial';
        document.getElementById("townName").innerHTML = "Sisters";
    }
    else if (town == "seaside") {
        townInfo = 'https://api.openweathermap.org/data/2.5/weather?id=5750984&appid=2dc961d7969a3deedf5172330221b7f2&units=imperial';
        document.getElementById("townName").innerHTML = "Seaside";
    }
    else {
        return
    }

    const weatherRequestURL = townInfo;
    let weatherRequest = new XMLHttpRequest();
    weatherRequest.open('GET', weatherRequestURL);
    weatherRequest.responseType = 'json';
    weatherRequest.send();
    let currenttemp, mph = '';
    weatherRequest.onload = function () {
        let weatherData = (weatherRequest.response);
        console.log(weatherData);
        currenttemp = parseFloat(Math.round(weatherData.main.temp));
        mph = parseFloat(weatherData.wind.speed);
        document.getElementById("currenttemp").innerHTML = currenttemp;
        document.getElementById("mph").innerHTML = mph;
        document.getElementById("humidity").innerHTML = weatherData.main.humidity;
        document.getElementById("currently").innerHTML = weatherData.weather[0].main;
        let speed = Math.pow(mph, 0.16);

        //run formula
        let windchill = 35.74 + (0.6215 * currenttemp) - (35.75 * speed) + (0.4275 * currenttemp * speed);

        //round windchill
        windchill = Math.round(windchill);

        //display windchill factor
        document.getElementById("windchill").innerHTML = windchill;
    };
}




//const weatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5750162&appid=2dc961d7969a3deedf5172330221b7f2&units=imperial';



//sisters ID: 5752129
//Pacific City : 5744635
//SeaSide: 5750984