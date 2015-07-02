module.exports = function( options ) {
  	var seneca = this;
  	var plugin = 'people';

  	seneca.add( {role: plugin, cmd:'list'}, getPeopleList);

  	function getPeopleList(args,done){
		console.log(args);
  		done(null,{what: "people list"})
	};

	seneca.add( {role: plugin, cmd:'single'}, getPersonSingle);

  	function getPersonSingle(args,done){
		console.log(args);
  		done(null,{what: "person single"})
	};

	return {name:plugin};
}
