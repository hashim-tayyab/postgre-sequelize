const User = require('../models/userModel');
const Course = require('../models/courseModel');


class UserCourseService {
  async getAllUserByCourse() {
    try {
      const allUsersWithCourses = await User.findAll({
        include: { model: Course, as: "course" },
      });
      const usersWithCourses = allUsersWithCourses.filter(user => user.course.length > 0);

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