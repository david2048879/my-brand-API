const router = require('express').Router();
const message = require('../models/message');
const messageController = require('../controllers/messageController')

//send message

router.post('/', messageController.SendMessage);


//get message
router.get('/', messageController.getMessage);



 module.exports= router