const { Schema, model } = require("mongoose");

const todoModel = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    item: {
        type: String,
        required: true,
        unique: true
    }
})

const Todo = model('todo', todoModel)
module.exports = Todo;