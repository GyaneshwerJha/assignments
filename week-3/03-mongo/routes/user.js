const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const bcrypt = require("bcrypt");
// TODO: Use try catch -> done
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {
        User.create({
            username: req.body.username,
            password: hashedPassword
        })
        res.json({ message: 'User created successfully' })
    }
    catch (err) {
        console.log("Error in creating the User", err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const allCourse = await Course.find();
        res.json({ allCourse });
    }
    catch (err) {
        console.log("Error in fetching the courses");
        res.status(501).json({
            message: "Internal server error"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {
        const { username, password } = req.headers;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "user not found" })
        }
        const cId = req.params.courseId;

        const course = await Course.findOne({ _id: cId });
        user.purchasedCourses.push(cId.toString());
        await user.save();

        if (course) {
            res.json({
                message: "Course purchased successfully"
            })
        }
    }
    catch (err) {
        console.log("Error in fetching the courses");
        res.status(501).json({
            message: "Internal server error"
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        const { username, password } = req.headers;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "user not found" })
        }
        const purchasedCourses = user.purchasedCourses;
        res.json({ purchasedCourses });
    }
    catch (err) {
        console.log("Error in fetching the courses");
        res.status(501).json({
            message: "Internal server error"
        })
    }
});

module.exports = router;