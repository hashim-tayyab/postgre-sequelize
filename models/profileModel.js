const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Profile = sequelize.define("profile", {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  country:{
    type: DataTypes.STRING,
  },

});

module.exports = Profile;