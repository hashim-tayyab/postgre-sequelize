const {getUsers, addUser, updateUser, removeUser, joinProfileUser} = require('../services/userService');


class UserController{
    async getUsers(req,res){
       try {
        const result = await getUsers();
        res.json(result);
       } catch (error) {
        console.log(error);
       }
    }

    async addUser(req, res){
        try {
            const result = await addUser(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }

    async updateUser(req, res){
        try {
            const result = await updateUser(req.body, req.params.email);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }

    async removeUser(req, res){
        try {
            const result = await removeUser(req.params.email);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }

    async joinProfileUser(req, res) {
        try {
            const result = await joinProfileUser();
            res.json(result)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserController();