
var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');


// Creates a "users" model that matches up with DB
var Users = sequelize.define("users", {
  user_name: Sequelize.STRING,
  user_email: Sequelize.STRING,
  user_password: Sequelize.STRING,
  user_favorites: Sequelize.STRING
});

// Syncs with DB
Users.sync();

module.exports = Users;




