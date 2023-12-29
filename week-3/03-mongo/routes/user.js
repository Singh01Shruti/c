const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, Course, User } = require("../db");


// User Routes
//router.use(userMiddleware);

router.post('/signup', userMiddleware, async(req, res) => {
    // Implement user signup logic
    const username = req.headers.username ;
    const password = req.headers.password ;

    const existingUser = await User.findOne({username: username});
    if(existingUser){
        return res.status(400).json({msg : 'Username already exists'})
    } else{
        const user = new User({
            username : username,
            password : password
        });

       await user.save();
        res.json({ msg : 'User created successfully'});
    }

});

router.get('/courses', userMiddleware, async(req, res) => {
    // Implement listing all courses logic
   
    try{
        const courses = await Course.find();
        res.json(courses);
    }catch(err){
        console.log(err);
        res.status(500).send('Bad req');
    }
    
    
});

router.post('/courses/:courseId',userMiddleware, async (req, res) => {
    // Implement course purchase logic
    // add krna hai purchased courses me for that user
    try{
        const courseId = req.params.courseId;
        const user = await User.findOne({ username: req.headers.username });
        if (!user) {
            console.log(user);
            return res.status(404).send('User not found');
        }

        user.purchasedCourses.push(courseId);
        await user.save();
        res.status(200).send('course added successfully');
    } catch(err){
        console.log(err);
        res.status(500).send('bad req');
    }
   
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try{
    //const user = await User.findOne({ username: req.headers.username });
    //const user = await User.findById(id).populate('purchasedCourses');
    const user = await User.findOne({ username: req.headers.username }).populate('purchasedCourses');
    if(!user){
        res.status(404).send('User not found');
    }
    res.json(user.purchasedCourses);
    }catch(err){
        res.status(500).send('Bad req');
    }
});

router.use(function (err,req,res,next) {
    res.status(400).send('Bad request');
    
});
module.exports = router;
