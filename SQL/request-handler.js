var url = require('url');
var fs = require('fs');
var mysql = require('mysql');
var http = require('http');
var db = require('./db.js').db;

module.exports.handler = function(request, response) {

  console.log("Serving request type " + request.method + " for url " + request.url);

  var parsedUrl = url.parse(request.url);

  var statusCodes = {
    GET: 200,
    POST: 201,
    OPTIONS: 200
  };

  var statusCode = statusCodes[request.method];
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "text/html";
  response.writeHead(statusCode, headers);
  if (routes[parsedUrl.pathname]) {

    if (request.method === 'OPTIONS') {
      response.end();
    }

    if (request.method === 'POST') {




      // console.log('in post');
      // var date = '2014-06-28';
      // var test = 'insert into messages (objectId, userId, username, content, roomname, createdAt) values (1, 2, "me", "test words", "here", NOW());';
      // db(test, response, request.method);
      request.on('data', function(data){
        data = JSON.parse(data);

        console.log(data);


        var full = 'insert into messages (objectId, userId, username, content, createdAt) values (1, 2, "'+ data.username + '", "' + data.text + '", NOW() );';
        db(full, response, request.method);

        // this should respond with created at and id (write it in the db)
      });

    }

    if (request.method === 'GET') {


      // response.end();
      var table = "FROM messages";
      var query = "SELECT *";

      db(query + ' ' + table + ';', response);

    }
  } else {
    response.writeHead(404, headers);
    response.end();
  }

};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var routes = {
  "/": true,
  "/classes/messages/": true,
  "/classes/messages": true,
  "/classes/room1": true,
  "/classes/room": true,
  "/scripts/app.js": true,
  "/scripts/config/js": true
};

var count = 0;


























