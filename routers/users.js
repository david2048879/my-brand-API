const router = require('express').Router();
const User = require('../models/users');


//update

router.put('/:id', async (req, res)=>{
    if(req.body.userId === req.params.id ){
        try{

            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
           res.status(200).json(updateUser)
        }catch(err){
            res.status(500).json(err)
        }
            
    }else{
        res.status(401).json("you can only update your account!")
    }
   
});

//delete user

router.delete('/:id', async (req, res)=>{
    if(req.body.userId === req.params.id ){
        try{
            try{
                const user = await User.findById(req.params.id);
                 user.delete(req.params.id)
            res.status(200).json('user has been deleted')

        }catch(err){
            res.status(500).json(err)
        }
    }catch(err){
        res.status(404).json('user not found')
    }
            
    }else{
        res.status(401).json("you can only delet your account!")
    }
   
});
//get user
router.get('/:id', async (req, res)=>{
    
    try{
        const user = await User.findById(req.params.id);
        const {pasword, ...others} = user._doc
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }


   
});

module.exports= router