const Register = require('../models/register');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req,res)=>{
    const user = await Register.findOne({email:req.body.email})

    if(!user){
        return res.status(404).json({message:'user not found'})
    }

    if(!await bcrypt.compare(req.body.password, user.password)){
        return res.status(404).json({message:'invalid credentials'})
    }
};

//<---------- register user ---------->
const signUp = async (req,res)=>{
    userData = {
        email: req.body.email,
        password:req.body.password,
        name: req.body.name,
        bankAccountNumber: req.body.bankAccountNumber
    };

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        if(hashedPassword){
            console.log('hashed password', hashedPassword);
            userData.password = hashedPassword;
        };

        const userStoredData = await Register.create(userData);
        if(userStoredData){
            console.log('user stored data' , userStoredData);
            res.json({status:'ok' , data:userStoredData});
        };
    }catch(error){
            res.status(404).json({message:error})
        };
};

module.exports = {
    login,
    signUp
}