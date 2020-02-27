var db = require('./db');

module.exports= {
	getById : function(id, callback){
		var sql = "select * from user where id="+id;
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from user";
		db.getResults(sql, null, function(results){
			console.log("get all sql:",sql);
			console.log("get all:",results);
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql ="SELECT * FROM user where email=? and password=?";
		db.getResults(sql, [user.email, user.password], function(results){
			console.log(results);
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByEmail : function(email, callback){
		var sql = "select * from user where email=?";
		db.getResults(sql, [email], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO user(name, email, password, type) VALUES (?, ?, ?, ?)";
		db.execute(sql, [user.name, user.email, user.password, "user"], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update : function(user, callback){
		var sql = "update user_details set username=?, password=?, phone_number=? where email=?";
		db.execute(sql, [user.username, user.password, user.phone, user.email], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete : function(user, callback){

		var sql = "Delete from user where email=?";
		db.execute(sql, [user.email], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}