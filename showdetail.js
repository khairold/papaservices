var express = require('express');
var app = express();
var fs = require("fs");

app.get('/api/people/:id',function(req,res){
	fs.readFile(__dirname+"/users.json",'UTF8',function(err,data){
		data = JSON.parse(data);
		var people = data["user"+req.params.id];
		res.end(JSON.stringify(people));
	})
})

var server = app.listen(4000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Start listening');
})


