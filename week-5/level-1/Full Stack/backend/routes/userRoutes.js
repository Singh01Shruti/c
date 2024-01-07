const { Router } = require("express");
const route = Router();
const { User } = require("../db/index");

route.post('/signup', async (req,res) => {
    await User.create({
        name : req.body.name,
        description : req.body.description,
        interests : req.body.interests,
        links : {
            twitter : req.body.twitter,
            linkedIn : req.body.linkedIn,
            instagram : req.body.instagram
        }
    });

    res.json({
        "msg" : "User created succesfully"
    });
});

route.get('/allusers', async (req,res) => {
    const users = await User.find({});

    res.status(200).json(users);

});


module.exports = route;