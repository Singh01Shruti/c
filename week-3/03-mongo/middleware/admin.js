const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username ;
    const password = req.headers.password ;

    if(req.path === '/signup'){
        if(!username || !password){
            return res.status(400).send(' Missing credentials');
        }
        next();
        return;
    }
   

    Admin.findOne({username : username, password : password})
    .then(doc => {
        next();
    })
    .catch(err => {
        return res.status(401).send('Invalid credentials');
    });
       
  
}

module.exports = adminMiddleware;