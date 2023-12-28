const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const { signJwt, verifyJwt } = require("../jwt/jwtSign");

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        await Admin.create({
            username: req.body.username,
            password: req.body.password
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

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(403).json({ message: "Username and Password not found" });
        }
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(403).json({ message: "Admin not found" });
        }
        if (admin.password !== password) {
            return res.status(403).json({ message: "Password not correct" });
        }
        const token = signJwt(username, password)
        return res.status(201).json({ token });
    }
    catch (err) {
        console.log(err)
        res.status(503).json({ message: "Internal server error" });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
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
        const allCourse = await Course.find();
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
