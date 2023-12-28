const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    purchasedCourses: {
        type: [String]
    }
});

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    imageLink:{
        type:String,
        require:true
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}