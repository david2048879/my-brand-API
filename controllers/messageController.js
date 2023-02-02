const { json } = require('express');
const message = require('../models/message');


exports.SendMessage = async (req, res)=>{
    const newmessage = new message(req.body);
    try{
     const sentmessage = await newmessage.save();
     res.status(200).json(sentmessage)
    }catch(err){
     res.status(500).json(err)
    }
 }

exports.getMessage = async (req, res)=>{
    try{
        
        const messages = await message.find();
        res.status(200).json(messages)
    }catch(err){
        res.status(500).json(err)
    }
   
}