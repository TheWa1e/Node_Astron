var mysql      = require('mysql');

var db_config = {
	host     : 'us-cdbr-east-03.cleardb.com',
	user     : 'bab2685f19d08c',
	password : '415d70d5',
	database : 'heroku_e0122e6c6548d22',
	port: 3306,
};

var connection;

function handleDisconnect() {
  
  connection = mysql.createConnection(db_config);

  connection.connect(function(err) {              
    if(err) {                                    
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 1); 
    }                                     
  });                                     
                                          
  connection.on('error', function(err) {  
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });
}

handleDisconnect();

module.exports = connection; 
