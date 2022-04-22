const express = require("express")

const controller = require("../controllers/todos.controller")
const auth = require("../middleware/auth")

const router = express.Router()

router.use(auth)

router
    .route("/")
    .get(controller.get)
    .post(controller.add)
    .delete(controller.delete)
    .patch(controller.update)

router.get("/toggle", controller.toggle)

module.exports = router
