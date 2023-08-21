var express = require('express');
const userController = require('../controller/userController');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home');
});

router.get('/adduser', (req, res) => {
    res.render('addEmp');
})

router.get('/getusers',userController.getUsers);

router.post('/adduser', userController.addUser);

router.put('/updateuser/:email', userController.updateUser);

router.delete('/removeuser/:email', userController.removeUser);

router.get('/userprofile', userController.joinProfileUser);

module.exports = router;