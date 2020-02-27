var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
    console.log('register page requested');
    var loginUser = request.cookies['loginUser'];
    console.log("loginUser: ",loginUser);
	response.render('register', {userlist: loginUser});
});

router.post('/', function(request, response){
    console.log('post request from login');
	var user ={
		name: request.body.name,
        email: request.body.email,
        password: request.body.password
    };
    console.log(user.email, user.password);
	userModel.insert(user, function(status){
        if(status){
            console.log('successfully signup');
            response.cookie('loginUser', request.body.email);
            var loginUser = request.cookies['loginUser'];
            console.log('successfull login with ', loginUser);
            response.redirect('/mainHome');
        }
        else{
            console.log('error');
            response.send('invalid username/password');
        }
    });
});

module.exports = router;