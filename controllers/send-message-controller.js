var express=require("express");
var connection = require('./../config');

module.exports.sendmessage=function(req,res){
  var message={
    "name":req.body.username,
    "email":req.body.emailaddres,
    "phone":req.body.phone,
    "message":req.body.message
  }
  connection.query('INSERT INTO message SET ?',message, function (error, results, fields) {
    if(error) return console.log(error);
    res.redirect("./../");
  });
}
