var express = require('express');
var path 	= require('path');
var app 	= express();
var port 	= 3000;

app.listen(process.env.PORT || port);
console.log("Server has started");