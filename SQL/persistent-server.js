
/* You already know how to create an http server from the previous
 * assignment; you can re-use most of that code here. */

var http = require('http');
var mysql = require('mysql');
var handler = require('./request-handler.js').handler;


var port = 3000;

var ip = '127.0.0.1';


var server = http.createServer(handler);

console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
