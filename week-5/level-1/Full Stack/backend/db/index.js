const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    description : String,
    interests : [String],
    links : {
        twitter : String,
        linkedIn : String,
        instagram : String
    }
});

const AdminSchema = new mongoose.Schema({
    name:String,
    Password: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
    User,
    Admin
}