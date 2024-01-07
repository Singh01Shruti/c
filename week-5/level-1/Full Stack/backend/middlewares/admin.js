const { Admin } = require("../db");

async function adminMiddleware (req,res,next) {
    const name = req.headers.name;
    const password = req.headers.password;

    try{
        if(await Admin.findOne({name:name, password : password})) next();
        else{
            res.json({
                "msg" : "Invalid credentials"
            });
        }
    }catch(err){
        res.json({
            "msg" : "Server error"
        });
    }
}

module.exports = adminMiddleware;