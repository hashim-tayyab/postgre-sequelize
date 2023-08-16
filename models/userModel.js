// const { sq } = require('../config/db');
const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  fullName: {
    type: DataTypes.STRING,
  },
  
  age: {
    type: DataTypes.INTEGER,
  },
});


User.sync().then(() => {
  console.log("User Model synced");
});


module.exports = User;