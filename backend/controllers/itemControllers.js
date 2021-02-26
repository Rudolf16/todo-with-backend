const Todo = require('../Models/Todo');


module.exports.getItem = async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params
        const todoItem = await Todo.findOne({ _id: id });
        res.send(todoItem)
    } catch (error) {
        console.log(error)
    }

}

module.exports.updateItem = async (req, res) => {
    try {
        console.log(req.params.id)
        const { id } = req.params
        const { item } = req.body.data
        const todoItem = await Todo.updateOne({ _id: id }, { $set: { item } }, { upsert: true });
        res.send(item)
    } catch (error) {
        console.log(error)
    }

}
