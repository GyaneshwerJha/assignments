const { Admin } = require("../db");
const { verifyJwt } = require("../jwt/jwtSign");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - Token not provided' });
        }
        const tokenParts = token.split(' ');

        if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
            return res.status(401).json({ message: 'Invalid token format' });
        }

        const checkToken = tokenParts[1];
        // Inside adminMiddleware
        const verify = verifyJwt(checkToken);
        if (!verify) {
            return res.status(401).json({ message: 'Unauthorized - Invalid token in middleware' });
        }

        next();
    }
    catch (err) {
        console.log("Error while fetching admin", err);
        res.status(501).json({
            message: "Internal server error in middleware"
        })
    }

}

module.exports = adminMiddleware;