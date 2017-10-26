

var http = require("http");
var fs = require("fs");
var request = require("request");
var HttpError = require("standard-http-error");
var express = require("express");
var app = express();
// app.get("/",function(req,res){
// 	res.send("Hello World");
// })
var server = http.createServer((req,res)=>{
	// console.log(req.url);
	if(req.url == "/"){
		res.writeHead(200, {"content-type": "text/html"});
		res.end(fs.readFileSync("index.html"));
	}else if(req.url == "/failed"){
		var error = new HttpError("FORBIDDEN");
		res.writeHead(error.code, {"content-type":"text/html"})
		console.log(error.code);
		res.end(error.code);
	}
	else if(req.url == "/style.css"){
		res.writeHead(200, {"content-type": "text/css"});
		res.end(fs.readFileSync("style.css"));
	}
	else if(req.url==`/hello/:id`){
		var id = req.params.id;
		console.log(id);
	}
	else{
		res.writeHead(403, {"content-type": "text/html"});
		res.end("<h1>You cannot access this page. Please go to.....</h1>");
	}
});
// app.listen(8000);
server.listen(8000);