var mysql      = require('mysql2');
var connection = mysql.createConnection({
	host     : 'us-cdbr-east-03.cleardb.com',
	user     : 'bab2685f19d08c',
	password : '415d70d5',
	database : 'heroku_e0122e6c6548d22',
});
connection.connect(function(err){
	if(!err){
		console.log("Database is connected");
	}else{
		console.log("Error while connecting with database");
	}
});
module.exports = connection;
connection.query("SET SESSION wait_timeout = 604800");