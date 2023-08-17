const Profile = require("../models/profileModel");
const User = require('../models/userModel');

class ProfileService {

    //Getting list of all employees
    async getProfile(req, res, next) {
        try {
            const employees = await Profile.findAll();
            return employees;
        } catch (error) {
            console.log(error);
        }
    }


    async addProfile(req, userId) {
        try {
          const newProfile = await Profile.create(req);
          const newUser = await User.findByPk(userId);
          if (!newUser) {
            return { error: "User not found" };
          }
          //We will use the setAssosiation function for the one to one relation
          await newUser.setProfile(newProfile);
          return newProfile;
        } catch (error) {
          console.error(error);
          return { error: "An error occurred" };
        }
      };
}

module.exports = new ProfileService();