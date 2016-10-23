var express = require('express');
var app =  express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to mongoose
mongoose.connect('mongodb://Users/italovalverde/Documents/localhost/bookstore');
var db = mongoose.connection;

app.get('/',function(req, res){
	res.send('Please use /api/books or /api/genres');
});

app.listen(4000);
console.log('Running on port 4000...')