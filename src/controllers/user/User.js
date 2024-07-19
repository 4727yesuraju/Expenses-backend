const User = require("../../model/User.js");

const test = (req,res)=>{
    res.json({message : true});
}

const userRegister = async (req,res,next)=>{
        const {email, firstName, lastName, password} = req?.body;
        try {
            //check if User is exists
            const userExists = await User.findOne({email});
            if(userExists){
               return next({message : "User already exists"});
            }
            const user = await User.create({email,firstName,lastName,password})
            res.status(200).json(user);
        } catch (error) {
            res.json(error);
        }
}

const fetchUsers = async (req, res)=>{
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
}
module.exports = {test, userRegister, fetchUsers };