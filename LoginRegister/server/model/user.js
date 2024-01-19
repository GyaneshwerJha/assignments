const mongoose = require('mongoose')


// schema -> model -> export

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    }
})

const User = mongoose.model('User', UserSchema) 

module.exports = {
    User
}