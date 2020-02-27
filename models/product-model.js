var db = require('./db');

module.exports = {
    getByProduct : function(id, callback){
		var sql = "select * from product where p_category_id = (select p_category_id from product_category where p_category_name = ?)";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	getByCompany : function(company, callback){
		var sql = "select * from product where company_id = (select company_id from company where company_name = ?)";
		db.getResults(sql, [company], function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getBySubCategory : function(subCategory, callback){
		var sql = "select * from product where p_sub_category_id = (select p_sub_category_id from product_sub_category where p_sub_category_name = ?)";
		db.getResults(sql, [subCategory], function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getByCategory : function(category, callback){
		var sql = "select * from product where p_category_id = (select p_category_id from product_category where p_category_name = ?)";
		db.getResults(sql, [category], function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	}
}