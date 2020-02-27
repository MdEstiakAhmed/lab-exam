var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	if(request.cookies['loginUser'] != null){
		userModel.getByEmail(request.cookies['loginUser'], function(result){
            console.log("general home controllers");
            console.log(result.type);
            if(result.type == "admin"){
                response.render('admin/home', {user: result});
            }
            else if(result.type == "user"){
                response.render('customer/home', {user: result});
            }
			
		});
	}else{
		response.redirect('/');
	}
});

module.exports = router;