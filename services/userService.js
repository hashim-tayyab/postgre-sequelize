const Profile = require("../models/profileModel");
const User = require("../models/userModel");

class UserService {

    //Getting list of all Users
    async getUsers(req, res, next) {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            console.log(error);
        }
    }

    //Creating new User
    async addUser(req){
        try {
            const newUser = await User.create(req);
            return newUser;
        } catch (error) {
            console.log(error);
        }
    }

    //Updating an User
    async updateUser(req, email){
        try {
            const updatedUser = await User.update(req, {where: {email:email}});
            return updatedUser;
        } catch (error) {
            console.log(error);
        }
    }

    //Deleting an User data
    async removeUser(email){
        try {
            const deletedUser = await User.destroy( { where: { email : email } } );
            return deletedUser;
        } catch (error) {
            console.log(error);
        }
    }


    async joinProfileUser(){
        try {
            const userProfile = await User.findAll( {
                include: {model: Profile, as:"profile", required: true},
            });
            return userProfile;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserService();