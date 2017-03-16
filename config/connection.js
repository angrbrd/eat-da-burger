// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
});

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;
