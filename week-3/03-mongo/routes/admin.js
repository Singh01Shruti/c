const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
//router.use(adminMiddleware);

router.post('/signup',adminMiddleware, async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username ;
    const password = req.headers.password ;

    const existingUser = await Admin.findOne({username: username});
    if(existingUser){
        return res.status(400).json({msg : 'Username already exists'})
    } else{
        const admin = new Admin({
            username : username,
            password : password
        });

        admin.save();
        res.json({ msg : 'Admin created successfully'});
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const published = req.body.published;


        const course = new Course({
            title: title,
            description : description,
            price : price,
            imageLink : imageLink,
            published : published

        });

        await course.save();
        res.json({ msg : 'Course created successfully'});
    


});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try{
        const courses = await Course.find();
        res.json(courses);
    } catch(err){
        res.status(500).send('Server Error');
    }
});


router.use(function (err,req,res,next) {
    console.log(err);
    res.status(400).send(' request');
    
});

module.exports = router;