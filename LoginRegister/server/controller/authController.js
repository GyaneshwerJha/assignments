const { hashPassword, comparePassword } = require("../helpers/auth");
const { User } = require("../model/user");
const jwt = require('jsonwebtoken')

const test = (req, res) => {
    res.json("Test is working")
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // check name
        if (!name) {
            return res.json({ error: "Name is required" })
        }
        // check the password
        if (!password || password.length < 6) {
            return res.json({ error: "Password is required and the minimmum length is 6" })
        }
        // check email 
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: "Email is already taken" })
        }

        const hashedPassword = await hashPassword(password)

        const user = await User.create({ name, email, password: hashedPassword })
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check if user exits
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: 'No user found'
            })
        }

        const match = await comparePassword(password, user.password);
        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
                res.cookie('token', token).json(user)
            })
        }
        if (!match) {
            res.json({ error: 'Password do not match' })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { test, registerUser, loginUser };