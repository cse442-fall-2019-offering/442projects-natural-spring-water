var express = require("express");
var router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cse442_542_2019_fall_teamn_db',
});

connection.connect(function(err){
    if(err){
		console.log(err);
	}else{
		console.log("connected to db");
	}
});

router.get("/", function(req, res, next) {
	var my_result = [];
	connection.query("SELECT * FROM courses", function (err, result, fields) {
		if(err){
			console.log(err);
			res.send("NO VALUES");
		}else{
			for (element of result){
				my_result.push(element);
			}
		}
	});
	
	connection.query("SELECT * FROM topics", function (err, result, fields) {
		if(err){
			console.log(err);
			res.send("NO VALUES");
		}else{
			for (element of result){
				my_result.push(element);
			}
			res.send(my_result);
		}
	});
});


module.exports = router;
