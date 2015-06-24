var express = require('express')()
var fs = require('fs')

express.get('/api/people/',function(req,res){
 fs.readFile(__dirname+"/users.json",'UTF8',function(err,data){
        res.end(data);
    });
})

var server = express.listen(4000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log('Server is listening ...')
    console.log("URL : "+host+":"+port)
})

