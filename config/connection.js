// // *********************************************************************************
// // CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// // *********************************************************************************

// // Dependencies
// var Sequelize = require("sequelize");
// env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/../config/config.json")[env];

// // Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
// var sequelize = new Sequelize(config.database, config.username, config.password, config, {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// // Exports the connection for other files to use
// module.exports = sequelize;
