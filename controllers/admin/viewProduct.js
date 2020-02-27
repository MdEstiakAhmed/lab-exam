var express = require('express');
var userModel = require.main.require('./models/user-model');
var productModel = require.main.require('./models/product-model');
var router = express.Router();

productModel


router.get('/delete/:p_id', function(request, response){
	console.log('delete page requested from home');
	var user = {
        p_id: request.params.p_id
    };
	productModel.delete(user, function(status){
        if(status){
            console.log('successfully delete');
            response.redirect('/admin/viewProduct');
        }else{
            console.log('error in delete');
            response.redirect('/admin/viewProduct');
        }
    });
});

module.exports = router;