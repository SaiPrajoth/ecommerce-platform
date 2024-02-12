const mongoose = require('mongoose');

UserSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:boolean,
        default:false
    }
    
},{timestamps:true})

const User = mongoose.model('User',UserSchema)

module.exports=User;