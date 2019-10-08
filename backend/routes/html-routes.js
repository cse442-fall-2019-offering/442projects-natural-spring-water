const mysql = require('mysql');

module.exports = function(app) {
    app.get('/', function(req, res) {
        //res.send('Hello from simple-react project');
        connection.query('SELECT * FROM courses', function(err, data){
            (err) ? res.send(err) : res.json({courses: data});
        });
    });
};