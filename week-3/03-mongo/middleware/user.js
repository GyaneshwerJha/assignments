const { User } = require("../db");
const bcrypt = require("bcrypt");

// TODO: Use try-catch -> done
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    try {
        const { username, password } = req.headers;
        const user = await User.findOne({ username });

        if (user && await bcrypt.compare(password, user.password)) {
            next();
        } else {
            return res.status(401).json({
                message: "User does not exist or incorrect password"
            });
        }
    } catch (err) {
        console.error("Error in fetching user", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = userMiddleware;
