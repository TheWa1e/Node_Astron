<<<<<<< HEAD
var mysql      = require('mysql');
=======
var mysql      = require('mysql2');
>>>>>>> 19aa51fa70fec76bd7d6be2e1b782b3d29d7c517
var connection = mysql.createConnection({
	host     : 'us-cdbr-east-03.cleardb.com',
	user     : 'bab2685f19d08c',
	password : '415d70d5',
	database : 'heroku_e0122e6c6548d22',
	connect_timeout : '100000'
});
connection.connect(function(err){
	if(!err){
		console.log("Database is connected");
	}else{
		console.log("Error while connecting with database");
	}
});
module.exports = connection;
