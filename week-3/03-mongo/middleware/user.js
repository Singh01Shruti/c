const { User} = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username ;
    const password = req.headers.password ;

    if(req.path === '/signup'){
        if(!username || !password){
            return res.status(400).send(' Missing credentials');
        }
        next();
        return;
    }
   

    User.findOne({username : username})
    .then(doc => {
       // user = req.headers.username ;
        next();
    })
    .catch(err => {
        console.log(err);
        return res.status(401).send('Invalid credentials');
    });

}

module.exports = userMiddleware;