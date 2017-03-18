// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    res.json(data);
  });
});

router.post('/', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    // res.redirect('/');
    res.json(data);
  });
});

router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    // res.redirect('/'');
    res.json(data);
  });
});

// Export routes for server.js to use.
module.exports = router;
