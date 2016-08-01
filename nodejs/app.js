'use strict';

var express =  require('express');
var app = express ();

app.get('/', function (req, res){
  res.send('Hello, Node!');

});

app.listen (3001, function(){

  console.log('Ex app on 3001');
});
