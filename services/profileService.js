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

    //Creating new employee
    // async addProfile(req, userId){
    //     try {
    //         const newProfile = await Profile.create(req);
    //         const newUser = await User.findByPk(userId);
    //         if (!newUser) {
    //             return { error: "User not found" };
    //           }
    //           await newUser.setProfile(newProfile);
    //         //   await employee.setProfile(newUser);
    //         return newProfile;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    async addProfile(req, userId) {
        try {
          const newProfile = await Profile.create(req);
          const newUser = await User.findByPk(userId);
      
          if (!newUser) {
            return { error: "User not found" };
          }
          await newUser.setProfile(newProfile);
          return newProfile;
        } catch (error) {
          console.error(error);
          return { error: "An error occurred" };
        }
      };

    //Updating an employee
    // async updateEmployee(req, email){
    //     try {
    //         const updatedUser = await User.update(req, {where: {email:email}});
    //         return updatedUser;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // //Deleting an employee data
    // async removeEmployee(email){
    //     try {
    //         const deletedUser = await User.destroy( { where: { email : email } } );
    //         return deletedUser;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

module.exports = new ProfileService();