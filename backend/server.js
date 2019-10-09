const express = require('express');

const mysql = require('mysql');

const PORT = 4000;

const app = express();

// const connection = mysql.createConnection({
//     host: 'tethys.cse.buffalo.edu',
//     user: 'wwong9',
//     password: '50193191',
//     database: 'cse442_542_2019_fall_teamn_db'
// });
//
// connection.connect(function(err){
//     (err) ? console.log(err) : console.log("connected to db");
// });

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cse442-root',
    database: 'my_db',
});

connection.connect(function(err){
    if(err){
		console.log(err)
	}else{
		connection.query("SELECT * FROM fruit", function (err, result, fields) {
			if(err){
				console.log(err);
			}else{
				console.log(result);
			}
		});
	}
});

require('./routes/html-routes')(app);

//Start the server
app.listen(PORT, () => {
    console.log('App running on port ${PORT}');
});
