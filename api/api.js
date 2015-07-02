var express = require('express');
var bodyParser = require('body-parser');
var seneca = require('seneca')();

// seneca.client(10202);
// seneca.act( {role:'people', cmd:'list'}, function(err,result) {
//   		if( err ) return console.error( err )
//   		console.log(result);
// 	});

seneca.use('./people/people-api.js');

var app = express();
app.use(bodyParser.json());
app.use(seneca.export('web'));
app.listen(3000);