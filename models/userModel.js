const mongoose = require('mongoose');

const UserauthSChema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'please add the user name'],
        unique:true
    },
    email:{
        type:String,
        required:[true, 'please add the email address'],
        unique:[true, 'Email address already taken']
    },
    password:{
        type:String,
        required:[true, 'pleas add the user password'],
    },
},
{timestamps: true});


module.exports = mongoose.model('user', UserauthSChema)