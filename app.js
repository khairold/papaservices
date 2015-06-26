var express = require('express');
var bodyParser = require('body-parser');
var seneca = require('seneca')();


// this is for the data store, done halfway, to be continues, still figuring out the best approach

// require('seneca-jsonfile-store');

// seneca.use('jsonfile-store',{folder:'./db'});

// var people = seneca.make$('people');

// apple.save$(function(err,apple){
//   console.log( "apple.id = "+apple.id  )
// });

// people.list$({id:"dev", list:"true"},function( err, people ) {
//     if( err ) return console.error( err )
//     console.log( 'loaded: '+people )
// });


//for people list
seneca.add('role:api,cmd:people',function(args,done){
	console.log(args);
  	done(null,args)
});

//for single person
seneca.add('role:api,cmd:peoplesingle',function(args,done){
	console.log(args);
  	done(null,args)
});

seneca.act('role:web',{use:{
	prefix: '/api', // prefix for all api call in this act
	pin: {role:'api',cmd:'*'},
	map: {
		people: {GET:true}, // using '/people' by default 
		peoplesingle: {GET:true, alias:'people/:id' } // asigning alias to '/people'
  	}
}});

var app = express();
app.use(bodyParser.json());
app.use(seneca.export('web'));
app.listen(3000);