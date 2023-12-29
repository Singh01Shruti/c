const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const {User, Course} = require("../db");


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username : req.headers.username,
        password : req.headers.password,
        token : jwt.sign({username : req.headers.username}, jwtPassword)
    });

    res.status(200).send('User created successfully');
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try{
        const user = await User.findOne({username : req.body.username});
        res.status(200).send(user.token);
    } catch(err){
        console.log(err);
        res.status(401).send('Invalid login');
    }

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch(error){
        res.status(401).send('Invalid login');
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
     
        const user = await User.findOne({token : req.headers.authorization});
        user.purchasedCourses.push(req.params.courseId);
        await user.save();
        res.status(200).send('purchased a course successfully');
    }catch(err){
        console.log(err);
        res.status(401).send('Invalid login');
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try{
        
        const user = await User.findOne({token : req.headers.authorization})
        const { purchasedCourses}  = await user.populate("purchasedCourses");
    
        res.json({purchasedCourses});
        //res.status(200).json(user.purchasedCourses);
    }catch{
        res.status(401).send('Invalid login');   
    }
});

router.use((err,req,res,next) =>{
    res.status(500).send('Bad req');
});

module.exports = router;
