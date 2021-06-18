const Sequelize = require("sequelize");

const sequelize = new Sequelize("messenger", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
});
module.exports = sequelize;
