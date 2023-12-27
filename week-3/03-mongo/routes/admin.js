const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = Router();
const bcrypt = require('bcrypt');

// TODO: Use try catch -> done
// Admin Routesa
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {
        await Admin.create({
            username: req.body.username,
            password: hashedPassword
        })
        res.json({
            message: "Admin created successfully"
        })
    }
    catch (err) {
        console.log("Error in creating the Admin", err);
        res.status(500).json({
            message: "Internal server error"
        });
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic\

    try {
        await Course.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageLink: req.body.imageLink
        })
        res.json({
            message: "Course created successfully"
        })
    }
    catch (err) {
        console.log("Error in creating the course", err);
        res.status(500).json({
            message: "Internal server error"
        });
    }

});

router.get('/courses', adminMiddleware, async (req, res) => {

    // Implement fetching all courses logic
    try {
        const allCourse = await Course.find().lean();
        // Send the response
        res.json({ allCourse });
    }
    catch(err){
        console.log("Error in fetching all the course", err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
    
});
module.exports = router;