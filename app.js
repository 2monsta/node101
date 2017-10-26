// http is part of node core, we dont have to get it, it is build in. we just have to ask for it
var http = require("http");

// fs = file system is build in. see above
// fs gives node access to this computer's file system
var fs = require("fs");

var server = http.createServer((req, res)=>{
	console.log(req.url); // will print off the requested url minus the host
	if(req.url =="/"){
		// user wnats the homepage
		var homePageHtml = renderHomePage()
		res.writeHead(200, {"content-type": "text/html"});
		res.end(homePageHtml);
	}else if (req.url=="/script.js"){
		var jsContents = renderScript();
		res.writeHead(200, {"content-type": "text/javascript"});
		res.end(jsContents);
	}else if(req.url =="/logo.png"){
		var image = fs.readFileSync("logo.png");
		res.writeHead(200, {"content-type": "image/png"});
		res.end(image);
	}else{
		res.writeHead(404, {"content-type":"text/html"})
		res.end("<h1>Sorry this page doesnt not exist</h1>")
	}


	// res.writeHead(200, {"content-type": "text/html"});
	// res.end("<h1>Sanity Check</h1>")

});
function renderScript(){
	var jsTOGET = fs.readFileSync("script.js");
	return jsTOGET;
}
function renderHomePage(){
	var theHTMLToGet = fs.readFileSync("homePage.html");
	return theHTMLToGet;
}
//tell the server we created with http.createServer to listen to port 8001, whenever someone maks a requrest via http to this port on this computer
// the function /call back will fire with the req and res object
server.listen(8001);
console.log("server is listening for HTTP traffic on port 8001");