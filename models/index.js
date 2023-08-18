const sequelize = require('../config/db'); // Adjust the path to your database configuration
const User = require('./userModel'); // Adjust the path to your User model
const Profile = require('./profileModel'); // Adjust the path to your Profile model
const Article = require('./articleModel');
const Course = require('./courseModel');
const UserCourse = require('./userCourseModel');

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


    // (MANY-TO-MANY) Relation between user and courses
    User.belongsToMany(Course, {
      through:'user_courses',
      foreignKey: '',
      as: 'course'
    });
    Course.belongsToMany(User, {
      through:'user_courses',
      foreignKey: '',
      as: 'user'
    })


    UserCourse.belongsTo(User);
    UserCourse.belongsTo(Course);


    await sequelize.sync({ force: false }); // This will drop existing tables and create new ones

    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
