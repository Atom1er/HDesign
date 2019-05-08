//fav Items from users//
module.exports = function (sequelize, DataType) {
    var favItems = sequelize.define("favItems", {
        user_email: DataType.STRING,
        item_name: DataType.STRING,
    });

    return favItems;
}