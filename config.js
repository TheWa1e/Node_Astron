var mysql      = require('mysql2');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '07152000',
	database : 'testing'
});
connection.connect(function(err){
	if(!err){
		console.log("Database is connected");
	}else{
		console.log("Error while connecting with database");
	}
});
module.exports = connection; 
