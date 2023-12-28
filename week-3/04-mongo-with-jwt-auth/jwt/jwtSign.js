const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
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
    const signature = jwt.sign({ username }, jwtPassword)
    return signature;
}
// Inside verifyJwt
function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
        return true; // If verification succeeds
    } catch (err) {
        console.error('JWT verification error:', err);
        return false; // If an error occurs during verification
    }
}


module.exports = {
    signJwt,
    verifyJwt,
    // decodeJwt,
    // jwtPassword,
};
