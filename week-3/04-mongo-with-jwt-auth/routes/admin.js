const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const {Admin, Course} = require("../db");


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username : req.body.username,
        password : req.body.password,
        token : jwt.sign({username : req.headers.username}, jwtPassword)
    });

    res.status(200).send('Admin created successfully');
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try{
        const user = await Admin.findOne({username : req.body.username});
        res.status(200).send(user.token);
    } catch(err){
        res.status(401).send('Invalid login');
    }

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    try{
        
        Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink : req.body.imageLink,
        published : req.body.published
        });
        res.status(200).send('course created successsfully');
    } catch(error) {
        console.log(error);
        res.status(401).send('Invalid login');
    }

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try{
        
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch(error){
        console.log(error);
        res.status(401).send('Invalid login');
    }
});

router.use((err,req,res,next) =>{
    res.status(500).send('Bad req');
});

module.exports = router;