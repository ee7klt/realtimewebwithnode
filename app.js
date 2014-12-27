// Include the Express module
var express = require('express');

//Create an instance of Express
var app = express();

var http = require('http');
app.use(express.logger({
	format: 'dev'
}));


var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('app.js', function(error, contents) {
      response.write(contents);
      response.end();
  });

}).listen(8080);

console.log("listening on 8080");
