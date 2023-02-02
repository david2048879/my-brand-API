const mongoose = require('mongoose');

const MessageSChema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true,
    },
    
},
{timestamps: true});


module.exports = mongoose.model('message', MessageSChema)