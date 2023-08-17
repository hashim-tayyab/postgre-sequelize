var express = require('express');
const articleController= require('../controller/articleController');
var router = express.Router();


router.get('/getarticle', articleController.getArticles);

router.post('/addarticle/:userId', articleController.addArticles);

module.exports = router;