var express = require('express');
const employeeController = require('../controller/employeeController');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home');
});

router.get('/addEmployee', (req, res) => {
    res.render('addEmp');
})

router.get('/getemployees',employeeController.getEmployees);

router.post('/addemployee', employeeController.addEmployee);

router.put('/updateemployee/:email', employeeController.updateEmployee);

router.delete('/removeemployee/:email', employeeController.removeEmployee);

module.exports = router;