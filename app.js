//var http = require('http');
//http.createServer(function (req, res) {
//    res.end("Hello World. 日本語テスト It is now " + (new Date()).toString());
//}).listen(8080);
var express = require('express');
var app = express();

app.get('/', function(req, res){
  //res.send('Hello World');
  res.end("Hello World. 日本語テスト It is now " + (new Date()).toString());
}).listen(8090);
