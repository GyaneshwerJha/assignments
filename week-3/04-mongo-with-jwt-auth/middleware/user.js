const { User } = require("../db");
const { verifyJwt } = require("../jwt/jwtSign");

// TODO: Use try-catch -> done
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected


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
        if (verify.username) {
            req.username = verify.username;
            next();
        }
    } catch (err) {
        console.error("Error in fetching user", err);
        res.status(500).json({ message: "Internal server error in  usre middleware" });
    }
}

module.exports = userMiddleware;
