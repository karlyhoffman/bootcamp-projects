// our module requires express + express.Router()
var express = require('express');
var ctrl	= express.Router();

ctrl.get('/', function(req, res, next){
	res.render('index', {
		message: "It's Russell Birthday"
	});
});

ctrl.get('/home', function(req, res, next){
	res.render('hello', {
		name: "Homer Simpson",
		adjective: "D'oh",
		framework: "Express.js"
	});
});

// export controller
module.exports = ctrl;