const express = require('express');
var mysql = require('mysql');
var bodyParser = require("body-parser");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "db_blog2"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


//Drop table (para prueba)
var sql = "DROP TABLE IF EXISTS posts_table";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table dropped");
});

//Create table
var sql = "CREATE TABLE IF NOT EXISTS posts_table (id int NOT NULL AUTO_INCREMENT, post_title VARCHAR(25) NOT NULL, post_content VARCHAR(255) NOT NULL, post_date DATE NOT NULL, post_type VARCHAR(20), post_image VARCHAR(100), PRIMARY KEY (id))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});

//Insert data (para prueba)
var sql = "INSERT INTO posts_table (post_title, post_content, post_date, post_type, post_image) VALUES ('Fideos', 'Estos son unos ricos fideos', '2021-04-21', 'Receta', 'https://recetasfideos.pro/wp-content/uploads/2019/08/tallarines-a-la-romana.jpg')";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 entry added");
});

//Insert data (para prueba)
var sql = "INSERT INTO posts_table (post_title, post_content, post_date, post_type, post_image) VALUES ('Sanguches', 'Estos son unos ricos Sanguches', '2021-04-21', 'Receta', 'https://finde.latercera.com/wp-content/uploads/2019/07/Martuca-8-ok-700x450.jpg')";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 entry added");
});

module.exports= con;