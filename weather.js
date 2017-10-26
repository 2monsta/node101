// http is part of node core, we dont have to get it, it is build in. we just have to ask for it
var http = require("http");
// fs = file system is build in. see above
var fs = require("fs");
// the request module is not part of core, we have it beacuse we have node,
// by default it will look in the node_modules foder
var request = require("request");
var apikey = 'e312dbeb8840e51f92334498a261ca1d';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
var weatherAsData = "";

// http module has a get method
// it takes 2 args:
// 	1 where
	// 2. code to run when back
// var request = http.get(weatherUrl, (res)=>{
// 	// console.log(res);
// 	console.log(res.statusCode);
// 	res.on("data",(chunkOfData)=>{
// 		// console.log(chunkOfData);
// 		weatherAsData += chunkOfData;
// 	});
// 	res.on("end", ()=>{
// 		console.log(weatherAsData);
// 	});
// });

request.get(weatherUrl, (error, response, weatherData)=>{
	if(error){
		console.log(error);
	}else{
		console.log(JSON.parse(weatherData));
	}
});