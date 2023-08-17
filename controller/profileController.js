const {getProfile, addProfile} = require('../services/profileService');


class ProfileController{
    async getProfile(req,res){
       try {
        const result = await getProfile();
        res.json(result);
       } catch (error) {
        console.log(error);
       }
    }

    async addProfile(req, res){
        try {
            const result = await addProfile(req.body, req.params.userId);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }

    // async updateEmployee(req, res){
    //     try {
    //         const result = await updateEmployee(req.body, req.params.email);
    //         res.json(result);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async removeEmployee(req, res){
    //     try {
    //         const result = await removeEmployee(req.params.email);
    //         res.json(result);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

module.exports = new ProfileController();