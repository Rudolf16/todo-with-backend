const Todo = require('../Models/Todo');

module.exports.getTodo = async (req, res) => {
    try {
        const todoList = await Todo.find();
        res.send(todoList)
    } catch (error) {
        console.log(error)
    }

}
module.exports.postTodo = async (req, res) => {
    try {
        const { item, id } = req.body
        await Todo.create({ item, id })
        res.json({ messahe: "Todo created succesfully" })
        console.log("Todo created succesfully")
    } catch (error) {
        console.log("Todo not created")
        console.log(error)
    }

}

module.exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.body
        await Todo.findByIdAndDelete(id)
        res.json({ message: "Todo deleted syccesfully" })
    } catch (error) {
        console.log("Todo deleted")
        console.log(error)
    }

}