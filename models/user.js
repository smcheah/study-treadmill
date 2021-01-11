module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    task: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return User;
}; // change this
