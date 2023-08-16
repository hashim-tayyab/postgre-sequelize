var express = require('express');
const employeeController = require('../controller/employeeController');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send("Home Page");
});

router.get('/getemployees',employeeController.getEmployees);

router.post('/addemployee', employeeController.addEmployee);

router.put('/updateemployee/:email', employeeController.updateEmployee);

router.delete('/removeemployee/:email', employeeController.removeEmployee);

module.exports = router;