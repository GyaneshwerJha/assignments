const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { signJwt } = require("../jwt/jwtSign");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try {
        await User.create({
            username: req.body.username,
            password: req.body.password
        })
        res.json({
            message: "User created successfully"
        })
    }
    catch (err) {
        console.log("Error in creating the user", err);
        res.status(500).json({
            message: "Internal server error"
        });
    }

});

router.post('/signin', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(403).json({ message: "Username and Password not found" });
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(403).json({ message: "user not found" });
        }
        if (user.password !== password) {
            return res.status(403).json({ message: "Password not correct" });
        }
        const token = signJwt(username, password)
        return res.status(201).json({ token });
    }
    catch (err) {
        console.log(err)
        res.status(503).json({ message: "Internal server error in routes" });
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
    const username = req.username;
    try {
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
        console.log(err)
        console.log("Error in fetching the courses");
        res.status(501).json({
            message: "Internal server error in routes"
        })
    }

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    try {
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

module.exports = router