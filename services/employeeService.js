const User = require("../models/userModel");

class EmployeeService {

    //Getting list of all employees
    async getEmployees(req, res, next) {
        try {
            const employees = await User.findAll();
            return employees;
        } catch (error) {
            console.log(error);
        }
    }

    //Creating new employee
    async addEmployee(req){
        try {
            const newUser = await User.create(req);
            return newUser;
        } catch (error) {
            console.log(error);
        }
    }

    //Updating an employee
    async updateEmployee(req, email){
        try {
            const updatedUser = await User.update(req, {where: {email:email}});
            return updatedUser;
        } catch (error) {
            console.log(error);
        }
    }

    //Deleting an employee data
    async removeEmployee(email){
        try {
            const deletedUser = await User.destroy( { where: { email : email } } );
            return deletedUser;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new EmployeeService();