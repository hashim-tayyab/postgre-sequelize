const sequelize = require('../config/db'); // Adjust the path to your database configuration
const User = require('./userModel'); // Adjust the path to your User model
const Profile = require('./profileModel'); // Adjust the path to your Profile model
const Article = require('./articleModel');

(async () => {
  try {

    // (ONE-TO-ONE) Relation between user and profile 
    User.hasOne(Profile, {
      foreignKey: 'userId',
      as: 'profile',
      onDelete: 'CASCADE'
    });
    Profile.belongsTo(User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE'
    });


    // (ONE-TO-MANY) Relation between User and article 
    User.hasMany(Article, {
      foreignKey: 'userId',
      as: 'article',
    });
    Article.belongsTo(User, {
      foreignKey: 'userId',
      as: 'user',
    });

    await sequelize.sync({ force: true }); // This will drop existing tables and create new ones

    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
