const weatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5750162&appid=2dc961d7969a3deedf5172330221b7f2&units=imperial';
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', weatherRequestURL);
weatherRequest.responseType = 'json';
weatherRequest.send();
let currenttemp, mph = '';
weatherRequest.onload = function () {
    let weatherData = (weatherRequest.response);
    currenttemp = parseFloat(Math.round(weatherData.main.temp));
    mph = parseFloat(weatherData.wind.speed);
    document.getElementById("currenttemp").innerHTML = currenttemp;
    document.getElementById("mph").innerHTML = mph;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("description").innerHTML = weatherData.weather[0].main;
    //set icon
    let icon = '<img src = \'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png\'>';
    document.getElementById("weatherIcon").innerHTML = icon;
    //set variables to help formula run more smoothly
    let speed = Math.pow(mph, 0.16);

    //run formula
    let windchill = 35.74 + (0.6215 * currenttemp) - (35.75 * speed) + (0.4275 * currenttemp * speed);

    //round windchill
    windchill = Math.round(windchill);

    //display windchill factor
    document.getElementById("windchill").innerHTML = windchill;
};
