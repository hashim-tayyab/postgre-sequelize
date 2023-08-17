var express = require('express');
const profileController = require('../controller/profileController');
var router = express.Router();

// router.get('/', function(req, res, next) {
//     res.render('home');
// });

// router.get('/addemployee', (req, res) => {
//     res.render('addEmp');
// })

router.get('/getprofile',profileController.getProfile);

router.post('/addprofile/:userId', profileController.addProfile);

// router.put('/updateemployee/:email', employeeController.updateEmployee);

// router.delete('/removeemployee/:email', employeeController.removeEmployee);

module.exports = router;