var express=require("express");
var bodyParser=require('body-parser');
const { join } = require("path");
 
var connection = require('./config');
var app = express();
 
/*var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var sendpasswordController=require('./controllers/send-password-controller');*/
var sendmessageController=require('./controllers/send-message-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.set("view engine", "ejs");
app.use(express.static(join(__dirname, "views")));

app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

connection.query('SELECT message FROM message', function(error, result, fields){
    app.get("/", function (req, res) {
      res.render("index.ejs", { params: result });
    });
});

/*app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/controllers/send-password-controller',sendpasswordController.sendpassword);*/
app.post('/controllers/send-message-controller',sendmessageController.sendmessage);

console.log(/*authenticateController*/);
/*app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller',authenticateController.authenticate);
app.post('/controllers/send-password-controller',sendpasswordController.sendpassword);*/
app.post('/controllers/send-message-controller',sendmessageController.sendmessage);

var request = require("request");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
