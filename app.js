// Include the Express module
var express = require('express');

//Create an instance of Express
var app = express();

var http = require('http');
app.use(express.logger({
	format: 'dev'
}));


http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Dog is running");
  setTimeout(function() {
    response.write("Dog is done");
    response.end();
  },5000);
	response.end();
}).listen(8080);

console.log("listening on 8080");
