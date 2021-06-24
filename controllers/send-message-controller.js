var express=require("express");
var mysql      = require('mysql');

var db_config = {
	host     : 'us-cdbr-east-03.cleardb.com',
	user     : 'bab2685f19d08c',
	password : '415d70d5',
	database : 'heroku_e0122e6c6548d22',
	port: 3306,
};

module.exports.sendmessage=function(req,res){
  var message={
    "name":req.body.username,
    "email":req.body.emailaddres,
    "phone":req.body.phone,
    "message":req.body.message
  }
  let connection = mysql.createConnection(db_config);
  
  connection.connect(function(err) {              
    if(err) {                                    
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 0); 
    }                                     
  });   
  
  connection.query('INSERT INTO message SET ?',message, function (error, results, fields) {
    if(error) return console.log(error);
    res.redirect("./../");
  });
  connection.end();
}
