// const { sq } = require('../config/db');
const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Profile = require('./profileModel');

const User = sequelize.define("user", {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  fullName: {
    type: DataTypes.STRING,
  },
  
  age: {
    type: DataTypes.INTEGER,
  },
});


// User.sync().then(() => {
//   console.log("User Model synced successfully");
// });
// User.hasOne(Profile, {
//   foreignKey: 'userId', // This is the foreign key in the Profile model
//   as: 'profile' // Alias for the association
// });

// // This line is optional and only needed if you want to access User from Profile
// Profile.belongsTo(User, {
//   foreignKey: 'userId',
//   as: 'user'
// });
// User.hasOne(Profile, {  foreignKey: 'email'});
// Profile.belongsTo(User, { foreignKey: 'email'});

module.exports = User;