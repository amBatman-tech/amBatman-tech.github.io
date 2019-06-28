// JavaScript Document
var express = require('express')
var request = require('request')
var app = express();

var city = 'New Delhi';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=9310c5d9e77983f78fa73e88af1140e1`;
app.set('view engine','ejs')



app.get('/',function(req,res){
	
	request(url,function(error,response,body){
		
		weather_json = JSON.parse(body)
		var weather={
			city:city ,
			temperature:weather_json.main.temp,
			description:weather_json.weather[0].description,
			icon:weather_json.weather[0].icon
	
			}
			
		var weather_data={weather:weather};
		
		res.render('weather',weather_data)
		
		});
	
	});


app.listen(8000)