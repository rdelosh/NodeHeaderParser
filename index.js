var express = require('express')
var path = require('path')
var url = require('url')

var app = express()





app.get('/api/whoami',function(req,res){
	var myurl = req
	console.log(req.headers)
	console.log(req.connection.remoteAddress)

	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(
						{ipaddress:req.headers["x-forwarded-for"]
							,language:req.headers["accept-language"]
							,OS: req.headers["user-agent"]


						}))	
})

app.listen(process.env.PORT || 5000)