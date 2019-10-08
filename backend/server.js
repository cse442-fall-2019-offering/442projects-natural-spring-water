const express = require('express');

const mysql = require('mysql');

const PORT = 4000;

const app = express();

const connection = mysql.createConnection({
    host: 'tethys.cse.buffalo.edu',
    user: 'wwong9@cheshire.cse.buffalo.edu',
    password: '50193191',
    database: 'cse442_542_2019_fall_teamn_db'
});

connection.connect(function(err){
    (err) ? console.log("failed connecting to db") : console.log("connected to db");
});

require('./routes/html-routes')(app);

//Start the server
app.listen(PORT, () => {
    console.log('App running on port ${PORT}');
});