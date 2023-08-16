const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "test1", 
  "user_1", 
  "12345", 
  {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

sequelize.authenticate().then(() => 
console.log("Connection established successfully with PostgreSQL."))
.catch((error) => {
console.error("Unable to connect to the database:", error)});


module.exports = sequelize;