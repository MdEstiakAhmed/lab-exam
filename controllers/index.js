var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	console.log('landing page (index.ejs) requested');
	response.render('index');
});

router.post('/', function(request, response){
    console.log('post request from login');
	var user ={
		email: request.body.email,
		password: request.body.password
    };
    console.log(user.username, user.password);
	userModel.validate(user, function(status){
	 	if(status){
            response.cookie('loginUser', request.body.email);
            var loginUser = request.cookies['loginUser'];
            console.log('successfull login with ', loginUser);
            response.redirect('/mainHome');
        }
        else{
			response.send('invalid username/password');
		}
	});
});

module.exports = router;