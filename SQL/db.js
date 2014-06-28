var mysql = require('mysql');
var url = require('url');
var http = require('http');

// var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/

/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/
module.exports.db = function(query, res, isPost){

  var dbConnection = mysql.createConnection({
    user: "root",
    password: "",
    database: "chat"
  });

  dbConnection.connect();
  var port = 3306;

  var thing;
  dbConnection.query(query, function(err, rows){
    if (err){throw err;}
    thing = rows;
  });


  dbConnection.end();

  if (isPost){
    // send back data that client expects
    res.end();
  }

  res.end(thing);
};
