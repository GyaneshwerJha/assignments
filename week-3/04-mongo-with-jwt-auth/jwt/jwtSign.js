const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const z = require('zod');
function signJwt(username, password) {
    const emailSchema = z.string().email();
    const passwordSchema = z.string().min(6);

    try {
        const userNameResponse = emailSchema.parse(username);
        const userPasswordResponse = passwordSchema.parse(password);
    } catch (err) {
        return null;
    }

    // if (!userNameResponse.success || !userPasswordResponse.success) {
    //     return null;
    // }
    const signature = jwt.sign({ username }, jwtSecret)
    return signature;
}
// Inside verifyJwt
function verifyJwt(token) {
    try {
        const ans = jwt.verify(token, jwtSecret);
        return ans; // If verification succeeds
    } catch (err) {
        console.error('JWT verification error:', err);
        return { error: 'JWT verification failed' };
    }
}


module.exports = {
    signJwt,
    verifyJwt,
    // decodeJwt,
    // jwtSecret,
};
