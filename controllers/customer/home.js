var express = require('express');
var userModel = require.main.require('./models/user-model');
var productModel = require.main.require('./models/product-model');
var router = express.Router();


router.get('/home', function(request, response){
	if(request.cookies['loginUser'] != null){
		userModel.getByEmail(request.cookies['loginUser'], function(result){
            console.log("customer home controllers");
			response.render('customer/home', {user: result});
		});
	}else{
		response.redirect('/');
	}
});

router.get('/showProduct/:category', function(request, response){
	if(request.cookies['loginUser'] != null){
		productModel.getByCategory(request.params.category, function(result){
			console.log("monitor click");
			console.log("product: ", result);
			response.render('customer/showProduct', {cat: result});
		});
	}else{
		response.redirect('/');
	}
});

router.get('/showProduct/:subCategory', function(request, response){
	if(request.cookies['loginUser'] != null){
		productModel.getByCategory(request.params.category, function(result){
			console.log("monitor click");
			console.log("product: ", result);
			response.render('customer/showProduct', {cat: result});
		});
	}else{
		response.redirect('/');
	}
});

module.exports = router;