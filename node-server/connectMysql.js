require('custom-env').env();
let mysql = require('mysql');

let con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});