var express = require('express');
var body_Parser = require('body-parser');
const app=require('./app');
url="http://localhost:4000/";
var port = 4000;
app.use(body_Parser.json());
app.listen(port, function(){
  console.log('Server Active on', port);
});