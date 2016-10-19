var express = require('express');
var ctrl	= express.Router();

var users = [
	{
		username: "Testy McTest Face",
		password: "password"
	},
	{
		username: "Bob",
		password: "burgers"
	},
	{
		username: "Gandolf",
		password: "youShallNotPass"
	}
];

ctrl.get('/', function(req, res, next){
	//request, response, callback
	res.json(users);
	// res.render('view', {})
});

module.exports = ctrl;