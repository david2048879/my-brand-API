const router = require('express').Router();
const UsersController = require('../controllers/UsersController');
const validateToken = require('../middleware/validateTokenHandle');


router.post('/register', UsersController.registerUser);

router.post('/login', UsersController.loginUser);

router.get('/current',validateToken, UsersController.currentUser);


module.exports= router