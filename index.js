const http = require('http');
const express = require('express');
var cors = require('cors');
const apiCall = require('./apiCall');

const app = express();


var corsOptions = {
  origin: 'http://localhost:8088/api',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

http.createServer((req,res,next) => {
	if(req.url === '/api') {
		res.write("Hello World!!");
		res.end();
	}
	if(req.url === '/api/network', cors(corsOptions)){
		apiCall.networkStat( function(response) {
			res.write(response);
			res.end();
		})
	}
	
}).listen(8088);