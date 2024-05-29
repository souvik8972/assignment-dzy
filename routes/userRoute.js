const express = require('express')
const router=express.Router()
const controller=require("../controller/userController")

router.post("/user",controller.saveUser)
router.get("/user",controller.getUser)

module.exports = router