//declaration
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

var index = require('./controllers/index');
var admin = require('./controllers/admin/home');

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static('static'));
app.use(cookieParser());

app.use('/', index);
app.use('/admin', admin);

//server startup
var serverPort=3000;
app.listen(serverPort, function(){
    console.log("node-application server started at", serverPort);
    
});