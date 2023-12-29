const {User} = require("../db");
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const name = req.headers.username;
    const pass = req.headers.password;

    if(req.path === '/signup' || req.path === '/signin'){
        if(!name || !pass){
            return res.status(400).send('Bad credentials');
        } else{
            next();
        }
    } else{
        try{
            jwt.verify(req.headers.authorization, jwtPassword);
            next();
        }catch(err){
            console.log(err);
            return res.status(400).send('Invalid credentials');
        }
        
    }
}

module.exports = userMiddleware;