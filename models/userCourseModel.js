const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const UserCourse = sequelize.define('user_course', {
      // No attributes needed, just the foreign keys
});
  
module.exports = UserCourse;