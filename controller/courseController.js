const {getCourse, addCourse} = require('../services/courseService');


class CourseController{
    async getCourse(req,res){
       try {
        const result = await getCourse();
        res.json(result);
       } catch (error) {
        console.log(error);
       }
    }

    async addCourse(req, res){
        try {
            const result = await addCourse(req.body, req.params.userId);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new CourseController();