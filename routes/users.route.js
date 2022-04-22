const express = require("express")
const controller = require("../controllers/users.controller")

const router = express.Router()

router.post("/register", controller.register)
router.post("/login", controller.login)
router.get("/account", controller.account)
router.get("/logout", controller.logout)

module.exports = router
