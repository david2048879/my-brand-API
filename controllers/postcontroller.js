
const { json } = require('express');
const blog = require('../models/post');
const post = require('../models/post');





//create new post

exports.createPost = async (req, res)=>{
    const newPost = new blog(req.body);
    try{
     const savedPost = await newPost.save();
     res.status(200).json(savedPost)
    }catch(err){
     res.status(500).json(err)
    }
 };

 // update Post

 exports.updatePost =async (req, res)=>{
    if(blog.id=== req.paramsid ){
        try{

            const updateblog = await blog.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
           res.status(200).json(updateblog)
        }catch(err){
            res.status(500).json(err)
        }
            
    }else{
        res.status(401).json("no blog found!")
    }
   
};

//delete post

exports.deletePost = async (req, res)=>{
    try{
       const posts = await blog.findById(req.params.id);
       if(blog.id == req.id){
        try{
           await posts.delete();
           res.status(200).json('Post has been deleted...'); 

        }catch(err){
            res.status(500).json(err)
        }
       }else{res.status(404).json('you can delete only your post')}
    
}catch(err){
    res.status(404).json(err)
}

};

// get post By ID

exports.getPost =  async (req, res)=>{
    try{
        const posts = await blog.findById(req.params.id);
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json(err)
    }
   
};

// get all post


exports.getAllPost = async (req, res)=>{
    const username = req.body.username;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await post.find({username});
        }else if(catName){
            posts= await post.find({categories:{$sin:[catName]}})
        }else{
            posts = await post.find()
        }
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json(err)
    }
   
}