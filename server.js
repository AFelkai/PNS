'use strict';
// load dependencies
const express = require('express');
const app = express();
const mysql = require('mysql');

// load config
const config = require("./config/mysql");

// Constants
const PORT = 8080;

// mysql connection
let connection = mysql.createConnection({
  host     : config.mysql_client.host,
  user     : config.mysql_client.user,
  database : config.mysql_client.database,
  password : config.mysql_client.password,
  port     : config.mysql_client.port
});

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });

// App
app.get('/', (req, res) => {
  res.send('Hello World\n');
});


app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
} );

