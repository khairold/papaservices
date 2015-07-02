var express = require('express');
var bodyParser = require('body-parser');
var seneca = require('seneca')();

seneca.client(10202);

//for people list
seneca.add('role:people-api,cmd:people',function(args,done){
	console.log(args);
  	// done(null,args);
  	this.act({role: 'people', cmd:'list'},done);
});

//for single person
seneca.add('role:people-api,cmd:peoplesingle',function(args,done){
	console.log(args);
  	// done(null,args);
  	this.act({role: 'people', cmd:'single'},done);
});

seneca.act('role:web',{use:{
	prefix: '/api', // prefix for all api call in this act
	pin: {role:'people-api',cmd:'*'},
	map: {
		people: {GET:true}, // using '/people' by default 
		peoplesingle: {GET:true, alias:'people/:id' } // asigning alias to '/peoplesingle'
  	}
}});


var app = express();
app.use(bodyParser.json());
app.use(seneca.export('web'));
app.listen(3000);