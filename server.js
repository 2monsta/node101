// Node is not JS but reads JSON.
// You can use it like python, like " python nameoffile" to" to run some JS because node reads JS
// we still have access to all the native elements: 


// BACKEND MEANS that NODE is processing it, it is FRONTEND if the browser is PROCESSING IT
var atlTeams = [
	"braves",
	"falcons",
	"united",
	"hawks"
]
// console.log(atlTeams);

var atl ={
	bball: "hawks",
	football: "falcons",
	soccar: "united",
	baseball: "braves"
}
// console.log(atl);

var http = require("http");
// create server is a method of http object
// it takes one argument, the function to run when someone connects via http
// you must use a port higher than 1024, because everything below belongs to root

var server = http.createServer((req, res)=>{
	// console.log(req);
	// res = Response = say something back
	// writeHead sets the HTTP headers, 2 args
	// 	1. status Code
	// 	2. mime type

	// res.writeHead(200, {'content-type': 'text/html'});
	res.writeHead(200, {'content-type': 'text/text'});
	res.write("<h1>Hello World~</h1>");
	res.end();
})
console.log("server is listening for connections on port 8000.");
server.listen(8000);