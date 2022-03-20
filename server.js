var express = require('express');
var body_Parser = require('body-parser');
const app=require('./app');
url="http://localhost:3000/";
var port = 3000;
app.use(body_Parser.json());
app.listen(port, function(){
  console.log('Server Active on', port);
});