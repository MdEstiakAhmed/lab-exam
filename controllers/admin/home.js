var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();


router.get('/home', function(request, response){
	if(request.cookies['loginUser'] != null){
		userModel.getByEmail(request.cookies['loginUser'], function(result){
            console.log("admin home controllers");
			response.render('admin/home', {user: result});
		});
	}else{
		response.redirect('/');
	}
});

router.get('/viewUser', function(req, res){
	console.log("show user controllers");
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('admin/viewUser', {userlist: results});
		}else{
			res.redirect('/home');
		}
	});
});

module.exports = router;