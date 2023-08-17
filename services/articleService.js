const Article = require('../models/articleModel');
const User = require('../models/userModel');

class ArticleService {
    async getArticles(req, res){
        try {
            const articles = await Article.findAll();
            return articles;
        } catch (error) {
            console.log(error);
        }
    }

    async addArticles(req, userId){
        try {
            const newArticle = await Article.create(req);
            const newUser = await User.findByPk(userId);
            if (!newUser) {
              return { error: "User not found" };
            }
            await newUser.setArticle(newArticle);
            return newArticle;
          } catch (error) {
            console.error(error);
            return { error: "An error occurred" };
          }
    }
}

module.exports = new ArticleService();