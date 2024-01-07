const { Router } = require("express");
const route = Router();
const {Admin, User} = require("../db/");
const adminMiddleware = require("../middlewares/admin")

route.post('/signup' , async (req,res) => {
    await Admin.create({
        name : req.body.name,
        password : req.body.password
    });

    res.json({
        "msg" : "Signed up successfully"
    });
});

route.post('/signin' ,adminMiddleware, async (req,res) => {
    res.json({
        "msg" : "Signed in successfully"
    });
});
route.delete('/delete', adminMiddleware, async(req,res) => {
    const userId = req.body.id;

    await User.findByIdAndDelete(userId);
    res.status(200).json({
        "msg" : "Deleted successfully"
    });
});

module.exports = route;






