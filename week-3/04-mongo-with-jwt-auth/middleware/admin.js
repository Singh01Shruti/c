// Middleware for handling auth
const { Admin } = require("../db");
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const name = req.body.username;
    const pass = req.body.password;

    if(req.path === '/signup' || req.path === '/signin' ){
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

module.exports = adminMiddleware;