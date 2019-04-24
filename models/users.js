

// Creates a "users" model that matches up with DB
module.exports = function (sequelize, DataType) {
  var users = sequelize.define("users", {
    user_name: DataType.STRING,
    user_email: DataType.STRING,
    user_password: DataType.STRING,
    user_favorites: DataType.STRING
  });

  return users;
}



