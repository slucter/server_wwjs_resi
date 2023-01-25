var mysql      = require('mysql');
require('dotenv').config();
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME
});
 
connection.connect((err)=>{
    if(err) console.log(`Error Mysql : ${err}`)
});

module.exports = connection;