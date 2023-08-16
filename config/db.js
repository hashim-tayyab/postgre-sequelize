const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test1", "user_1", "12345", {
  host: "localhost",
  dialect: "postgres",
});

// const testDbConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

sequelize.authenticate().then(() => 
console.log("Connection has been established successfully."))
.catch((error) => {
console.error("Unable to connect to the database:", error)});


module.exports = sequelize;
// module.exports = { sq: sequelize, testDbConnection };
