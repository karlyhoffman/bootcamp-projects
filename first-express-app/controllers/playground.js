var express = require('express');
var ctrl	= express.Router();

// Data for our routes
var data = [
	{
		name: "Beach Goth",
		location: "The Observatory",
		notes: "Weird."
	},
	{
		name: "Sasquatch",
		location: "The Gorge Amphitheatre",
		notes: "Gorgeous"
	},
	{
		name: "Joshua Tree National Park",
		location: "California",
		notes: "Amazing"
	}
];

// Build our first real API
ctrl.get('/', function(req, res, next) {
	res.json(data);
});

ctrl.get('/1', function(req, res, next) {
	res.json(data[0]);
});

ctrl.get('/2', function(req, res, next) {
	res.json(data[1]);
});

ctrl.get('/3', function(req, res, next) {
	res.json(data[2]);
});

module.exports = ctrl;