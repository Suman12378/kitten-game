const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res, next) => {

    // console.log('registerUser')

    try {
        // console.log(req.body);
        
        const { email, password, confirmPassword, userName} = req.body;

  
        const emailCheck = await User.findOne({ email })


        if (emailCheck) {
            return res.status(400).json({
                msg: "Email Already used",
                status: false
            })
        }

        const nameCheck = await User.findOne({username:userName});

        if(nameCheck){
            return res.status(400).json({msg:'User Name already exist'});
        } 

        if (password != confirmPassword) {
            return res.status(400).json({
                msg: "Confirm Password doesn't match",
                status: false
            })
        }

        const user = await User.create({
            username:userName,
            email,
            password,
            confirmPassword,
        })
        const random = await user.save();
        
        return res.status(201).json({
            msg : "User registered successfully",
            status: true,
            user,
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg:'Internal Server Error'});
}
};

const loginUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const { email, password} = req.body; 
        const userData = await User.findOne({ email })
        if (!userData) {
            return res.json({
                msg: "User Not found",
                status: false
            })
        }

        const isPasswordValid = userData.password===password;
        if(isPasswordValid)
        { 
            
    
            
            return res.json({
                msg:"User logged in",
                userDetails:userData,
                status:true,
            
            })
        }
        else
        {
            return res.json({
                msg: "Incorrect Password",
                status: false
            })
        }
       
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
};