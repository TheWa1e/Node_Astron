var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'us-cdbr-east-03.cleardb.com',
	user     : 'bab2685f19d08c',
	password : '415d70d5',
	database : 'heroku_e0122e6c6548d22'
});

function connect(callback=null){
    console.log("MYSQL TAKE CONNECT");
    mysql=mysqldb.createConnection({host: "localhost", user: "*", password: "*", database:"*"});
    mysql.on('error', function(err) {
      console.log("---" +err.message);
      console.log("---" +err.code);
    });
  if(callback)setTimeout(callback,100);
}
connect();

module.exports = connection; 
