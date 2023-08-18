const User = require('../models/userModel');
const Course = require('../models/courseModel');
const UserCourse = require('../models/userCourseModel');


class UserCourseService {
  async getAllUserByCourse() {
    try {
      const allUsersWithCourses = await User.findAll({
        include: { model: Course, as: "Courses" },
         // Include associated courses
      });
      const usersWithCourses = allUsersWithCourses.filter(user => user.Courses.length > 0);

      return usersWithCourses;
    } catch (err) {
      console.log(err);
    }
  }


  async createUserCourse(courseId, userId) {
    try {
      const user = await User.findByPk(userId);
      const course = await Course.findByPk(courseId);
      if (!user) {
        return { error: "User does not exist" };
      }
      if (!course) {
        return { error: "Course does not exist" };
      }
      await user.addCourse(course);
      return { message: "User and Course added successfully" };
    } catch (err) {
      console.error(err);
      throw err; 
    }
  }
}
module.exports = new UserCourseService();