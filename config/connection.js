var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(err => {
    if (err) {
        console.log("Error connecting " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;