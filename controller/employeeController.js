const {getEmployees, addEmployee, updateEmployee, removeEmployee} = require('../services/employeeService');


class EmployeeController{
    async getEmployees(req,res){
       try {
        const result = await getEmployees();
        // console.log(result[0].email);
        res.json(result);
       } catch (error) {
        console.log(error);
       }
    }

    async addEmployee(req, res){
        try {
            const result = await addEmployee(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }

    async updateEmployee(req, res){
        try {
            const result = await updateEmployee(req.body, req.params.email);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }

    async removeEmployee(req, res){
        try {
            const result = await removeEmployee(req.params.email);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new EmployeeController();