// Import the ORM and connection objects
var orm = require ('./orm.js');

// Import the connection file directly, in order to terminate the connection at the end of the test run
var connection = require ('./connection.js');

// Select all entries from the database
orm.selectAll('burgers', function (data) {
	console.log('orm.selectAll test...\n\n');

	console.log('__________Burger Menu__________\n');

	for (var i = 0; i < data.length; i++) {
		console.log('Burger ID = ' + data[i].id);
		console.log('Burger Name = ' + data[i].burger_name);
		console.log('Available = ' + data[i].devoured);

		console.log('+++++++++++++++++++++++++++++++++++++++');
	}
});

// Insert a single entry into the database
orm.insertOne('burgers', 
	         ['burger_name', 'devoured'], 
	         ['Success Story Mushroom Double-Stack Burger', false], 
	         function (data) {
	console.log('\n\norm.insertOne test...\n\n');

	console.log('Inserted new row with ID = ' + data.insertId + '\n\n');
});

// Update a single entry in the database
orm.updateOne('burgers', {devoured: true}, 'id = 7', function (data) {
	console.log('\n\norm.updateOne test...\n\n');

	console.log('Result: ' + data.message);
});

connection.end();
