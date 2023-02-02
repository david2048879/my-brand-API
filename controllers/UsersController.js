const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


//@desc register a user
//@route POST/api/users/register
//@access public

exports.registerUser = async (req, res) =>{
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(400).json('All fields are mandatory!');
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable){
        res.status(400).json('User already registered!');
    }

    //Hash password
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log('hashed password: ',hashedpassword)

    const user = await User.create({
        username,
        email,
        password: hashedpassword,
    });
    console.log(`user created ${user}`)
    if(user){
        res.status(201).json({
            _id: user.id,
            username: user.username,
             email: user.email
        })
    }else{
        res.status(400).json('user data us not valid');
    }
    res.json({message: 'Register the user'});
}

//@desc login
//@route POST/api/users/login
//@access public

const ACCESS_TOKEN_SECERT = 'david48879'

exports.loginUser = async (req, res) =>{
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400).json("All fields are mandatory");
    }
    const user =  await User.findOne({ email });

    //compare password with hashedpassword

    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        },
        ACCESS_TOKEN_SECERT, { expiresIn: "5m"}
        );
        res.status(200).json({ accessToken });
    }else{
        res.status(401).json({message: " Email or password is not valid"});
    }
}

//@desc current user info
//@route POST/api/users/current
//@access public

exports.currentUser = async (req, res) =>{
    res.json({message: 'current user info'});
}