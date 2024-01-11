const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gyaneshwer0001:gyaneshwer0001@cluster0.zpbmyjw.mongodb.net/course-selling?retryWrites=true&w=majority')
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        
    }
})

const todo = mongoose.model('todos', taskSchema)

module.exports = {
    todo
}