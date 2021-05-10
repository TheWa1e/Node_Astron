var mysql      = require('mysql2');
var pool = mysql.createPool({
	host     : 'us-cdbr-east-03.cleardb.com',
	user     : 'bab2685f19d08c',
	password : '415d70d5',
	database : 'heroku_e0122e6c6548d22',
});
pool.getConnection(function(err, connection) {
  if(err) {
    console.log(err);
  }
  let sql = "SELECT * FROM `message";
  connection.query(sql, [], function(err, results) {
    connection.release(); // always put connection back in pool after last query
    console.log(results);
    if(err) {
      console.log(err);
    }
  });
});
module.exports = pool;
pool.query("SET SESSION wait_timeout = 604800");