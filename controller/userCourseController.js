const { getAllUserByCourse, createUserCourse,} = require("../services/userCourseService");
  
  class UserCourseController {
    async getAllUserByCourse(req, res) {
      try {
        const result = await getAllUserByCourse();
        res.json(result);
      } catch (error) {
        console.log(error);
      }
    }
    async createUserCourses(req, res) {
      try {
        const userId = req.query.userId;
        const courseId = req.query.courseId;
        const result = await createUserCourse(courseId, userId);
        res.json(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  module.exports = new UserCourseController();