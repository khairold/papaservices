module.exports = function( options ) {
  	var seneca = this;
  	var plugin = 'people-api';

	//listening to people-service.js
	seneca.client(10202);

	// seneca.use('./people/people-lib');

	// seneca.act( {role:'people', cmd:'list'}, function(err,result) {
 //  		if( err ) return console.error( err )
 //  		console.log(result);
	// });

	//for people list
	seneca.add('role:people-api,cmd:people',function(args,done){
		console.log(args);
	  	//calling people-service.js
	  	// done(null,args);
	  	this.act({role: 'people', cmd:'list'},done);
	});

	//for single person
	seneca.add('role:people-api,cmd:peoplesingle',function(args,done){
		console.log(args);
	  	//calling people-service.js
	  	done(null,args);
	  	// this.act({role: 'people', cmd:'single'},done);
	});

	seneca.act('role:web',{use:{
		prefix: '/api', // prefix for all api call in this act
		pin: {role:'people-api',cmd:'*'},
		map: {
			people: {GET:true}, // using '/people' by default 
			peoplesingle: {GET:true, alias:'people/:id' } // asigning alias to '/peoplesingle'
	  	}
	}});

	return {name:plugin};
}

