const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const usersRouter = require("./routes/users.route")
const todosRouter = require("./routes/todos.route")

const app = express()

app.use(express.json())
app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(morgan("combined"))

app.use("/api/todos", todosRouter)
app.use("/api/users", usersRouter)

app.use(express.static(path.resolve(__dirname, "frontend/build")))

const PORT = process.env.PORT || 5000
const DATA_BASE = process.env.DATA_BASE || "mongodb://app:12345678@127.0.0.1:27017/todoapp"

app.listen(PORT, async function (err) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    try {
        await mongoose.connect(DATA_BASE)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Listening on PORT ${PORT}`)
})
