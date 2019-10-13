const mysql = require("mysql");
const credentials = require("../credentials");
let connection;
const sequelize = require('sequelize-heroku').connect(require('sequelize'));

if (sequelize) {
    sequelize.authenticate().then( function() {
        var config = sequelize.connectionManager.config;
        console.log('sequelize-heroku: Connected to '+config.host+' as '+config.username+'.');
        
        sequelize.query('SELECT 1+1 as test').then(function(res) {
            console.log('1+1='+res[0][0].test);
            if (process.env.JAWSDB_URL) {
                connection = mysql.createConnection(process.env.JAWSDB_URL);
            } else {
                connection = mysql.createConnection(credentials.mySQL);
            }
        });
       
    }).catch( function(err) {
        var config = sequelize.connectionManager.config;
        console.log('Sequelize: Error connecting '+config.host+' as '+config.user+': '+err);
    });
} else {
    console.log('No environnement variable found.');
}

module.exports = connection;