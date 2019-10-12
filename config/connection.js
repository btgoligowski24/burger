const mysql = require("mysql");
const credentials = require("../credentials");
const connection = mysql.createConnection(credentials.mySQL);

module.exports = connection;