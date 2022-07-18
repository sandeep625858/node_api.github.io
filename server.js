var http = require('http');
var url = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e89c43d48f5e64ac5d0a06ffef538c02';


var server = http.createServer(function (request, response) {
    var request = require('request');
    request(url, function (err, res, body)
    {
        var data = JSON.parse(body);
        console.log(data);
        response.write("<html><head><title>weather report</title><link rel='stylesheet' href='style.css'></head> <body> <h3>Weather Report</h3><div id='container'>");
        response.write("<h1> Visibility - : "+data.visibility+"<h1>");
        response.write("<h1> Pressure - : "+data.main.pressure+"<h1>");
        response.write("<h1> Temperature - : "+data.main.temp+"<h1>");
        response.write("<h1> Feels_like - : "+data.main.feels_like+"<h1>");
        response.write("<h1> Minimum Temparature - : "+data.main.temp_min+"<h1>");
        response.write("<h1> Maximum Temparature - : "+data.main.temp_max+"<h1>");
        response.write("<h1> Humidity - : "+data.main.humidity+"<h1>");
       
        response.end();

    })
    

    
}).listen(8000);