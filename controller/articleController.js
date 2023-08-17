const { getArticles, addArticles } = require('../services/articleService');


class ArticleController{
    async getArticles(req,res){
       try {
        const result = await getArticles();
        res.json(result);
       } catch (error) {
        console.log(error);
       }
    }

    async addArticles(req, res){
        try {
            const result = await addArticles(req.body, req.params.userId);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ArticleController();