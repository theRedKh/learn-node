var http = require('http'); //require the http module
var dt = require('./myfirstmodule.js'); //require the custom module
http.createServer(function (req, res) { //create a server
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The date and time are currently: ' + dt.myDateTime());
    res.end();
}).listen(8080); //port where the server is listening