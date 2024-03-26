// userModel.js

const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
     username:{
        type:String,
     },
     email:{
      type : String,
      required : true,
      max : 50, 
      unique : true,
     },
     password:{
        type:String,
        required:true,
     },
     confirmPassword:{
      type:String,
      required:true,
     },
     score:{
      type:Number,
       default:0,
     },
     winMatch:{
      type:Number,
      default:0,
     },
     totalMatch:{
       type:Number,
       default:0,
     }
}, {timestamps:true});

const User = mongoose.model('User', userSchema);

module.exports = User;