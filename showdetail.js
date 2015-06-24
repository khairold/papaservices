var express = require('express')()
var fs = require("fs")
var seneca = require('seneca')()

seneca.add({cmd:'readfile'},function(args,done){
    fs.readFile(__dirname+"/users.json",'UTF8',function(args,data){
        done(null,data);
    });
})

express.get('/api/people/:id',function(req,res){
    seneca.act({cmd:'readfile'},function(err,result){
        if(err)
            console.log('Error encountered !');
        else{
            data = JSON.parse(result);
            var people = data["user"+req.params.id];
            res.end(JSON.stringify(people));
        }
    });
})

var server = express.listen(4000,function(){
	var host = server.address().address
    var port = server.address().port
    console.log('Server is listening ...')
    console.log("URL : "+host+":"+port)
})


