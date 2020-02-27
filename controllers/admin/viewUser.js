var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();




router.get('/delete/:email', function(request, response){
	console.log('delete page requested from home');
	var user = {
        email: request.params.email
    };
	userModel.delete(user, function(status){
        if(status){
            console.log('successfully delete');
            response.redirect('/admin/viewUser');
        }else{
            console.log('error in delete');
            response.redirect('/admin/viewUser');
        }
    });
});

module.exports = router;