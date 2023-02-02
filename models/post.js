const mongoose = require('mongoose');

const postSChema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: false,
    },
    username:{
        type: String,
        required: true,
    },
    cat:{
        type: String,
        required: false,
    },
    comment:{
        type: Object,
        required: false,
    } ,
    like:{
        type: Number,
        required: false,
    } ,
    
},
{timestamps: true});


module.exports = mongoose.model('post', postSChema)