const mongoose = require('mongoose');

// Connect to MongoDB


// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    name: {
        type : String,
    },
    password: {
        type : String,
    }
});

const CourseSchema = new mongoose.Schema({
    title: {
        type : String,
    },
    description: {
        type : String,
    },
    price: {
        type : Number,
    },
    imageLink: {
        type: String
    },
    published: {
        type : Boolean,
    }

});

const UserSchema = new mongoose.Schema({
    username: {
        type : String,
    },
    password: {
        type : String,
    },
    purchasedCourses: [CourseSchema]
});


const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
//const user = new User({name : 'hello@gmail.con'}, password: 'hello')
module.exports = {
    Admin,
    User,
    Course
}