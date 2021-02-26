const router = require("express").Router();
const { getItem, updateItem } = require("../controllers/itemControllers")


router.get("/item:id", getItem)
router.patch("/item:id", updateItem)



module.exports = router