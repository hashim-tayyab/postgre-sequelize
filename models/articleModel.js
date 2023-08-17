const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Article = sequelize.define('article', {
    title:{
        type: DataTypes.STRING,
    },
    genre:{
        type: DataTypes.STRING,
    },
});

module.exports = Article;