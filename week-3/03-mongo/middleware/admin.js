const { Admin } = require("../db");
const bcrypt = require("bcrypt");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    try {
        const { username, password } = req.headers;
        if (!username || !password) {
            res.status(401).json({ message: "username and password required" });
        }

        const admin = await Admin.findOne({ username });

        if (admin && await bcrypt.compare(password, admin.password)) {
            next();
        }
        else {
            return res.status(401).json({
                message:"admin not found"
            })
        }
    }
    catch (err) {
        console.log("Error while fetching admin", err);
        res.status(501).json({
            message:"Internal server error"
        })
    }

}

module.exports = adminMiddleware;