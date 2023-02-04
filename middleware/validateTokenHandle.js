
const jwt = require("jsonwebtoken");

const validateToken = async(req, res, next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.Authorization;
    if(authHeader && authHeader.startsWith(" ")) {
        taken = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decoded)=>{
            if(err){
                res.status(401).json("User is not authorized");
            }
            req.user = decoded.user;
            next()
        });
        if(!token){
            res.status(401).json("User not authorized or token is missing")
        }
    }
};

module.exports = validateToken 