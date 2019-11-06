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
			var courses = [];
			for (element of result){
				courses.push(element);
			}
			my_result.push(courses);
		}
	});
	
	connection.query("SELECT * FROM topics", function (err, result, fields) {
		if(err){
			console.log(err);
			res.send("NO VALUES");
		}else{
			var topics = [];
			for (element of result){
				topics.push(element);
			}
			my_result.push(topics);
			res.send(my_result);
		}
	});
});


module.exports = router;
