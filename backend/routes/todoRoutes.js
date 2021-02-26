const router = require("express").Router();
const { getTodo, postTodo, deleteTodo } = require("../controllers/todoControllers")


router.get("/todo", getTodo)
router.post("/todo", postTodo)
router.delete("/todo", deleteTodo)


module.exports = router