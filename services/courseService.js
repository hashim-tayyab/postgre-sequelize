const Course = require('../models/courseModel');

class CourseService {
    async getCourse(req, res){
        try {
            const courses = await Course.findAll();
            return courses;
        } catch (error) {
            console.log(error);
        }
    }

    async addCourse(req, userId){
        try {
            const newCourse = await Course.create(req);
            return newCourse;
          } catch (error) {
            console.error(error);
            return { error: "An error occurred" };
          }
    }
}

module.exports = new CourseService();