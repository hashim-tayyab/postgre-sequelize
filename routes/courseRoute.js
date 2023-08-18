var express = require('express');
const courseController= require('../controller/courseController');
const userCourseController = require('../controller/userCourseController');
var router = express.Router();


router.get('/getcourse', courseController.getCourse);

router.post('/addcourse/:userId', courseController.addCourse);


router.get('/getusercourse', userCourseController.getAllUserByCourse);

router.post('/addusercourse', userCourseController.createUserCourses);

module.exports = router;