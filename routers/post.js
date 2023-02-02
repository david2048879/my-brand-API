const router = require('express').Router();
const { create } = require('../models/users');
const blog = require('../models/post');
const { Route } = require('express');
const post = require('../models/post');
const postcontroller  = require('../controllers/postcontroller');





router.post('/', postcontroller.createPost);

//UPDATE Post

router.put('/:id', postcontroller.updatePost);

// delete post
router.delete('/:id', postcontroller.deletePost);


//get post
router.get('/:id', postcontroller.getPost);

//get all post
router.get('/', postcontroller.getAllPost);


module.exports= router