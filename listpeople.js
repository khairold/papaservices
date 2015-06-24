var express = require('express')()
var fs = require('fs')
var seneca = require('seneca')()

seneca.add({cmd:'readfile'},function(args,done){
    fs.readFile(__dirname+"/users.json",'UTF8',function(err,data){
        done(null,data);
    });
})

express.get('/api/people/',function(req,res){
    seneca.act({cmd:'readfile'},function(err,data){
        if(err)
            console.log('Error encountered !');
        else
        res.end(data);
    })
})

var server = express.listen(4000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log('Server is listening ...')
    console.log("URL : "+host+":"+port)
})

