//Load express module with `require` directive
var express = require('express')
var app = express()

// set static folder to deliver css/js etc
app.use(express.static(__dirname + '/wwwroot/static/'));
// set all routes with * wildcard so that all requests to index.html and we let react-router handle the routing
app.get('/*', function(req,res) {
  res.sendFile('wwwroot/index.html' , { root : __dirname});
});

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
});

//without express
// // requiring the HTTP interfaces in node
// var http = require('http');
// // create an http server to handle requests and response
//  http.createServer(function (req, res) {
//     // sending a response header of 200 OK
//      res.writeHead(200, {'Content-Type': 'text/plain'});
//      // print out Hello World \
//      res.end('Hello World\n');
//       // use port 8080
//      }).listen(8080);
//      console.log('Server running on port 8080.');
