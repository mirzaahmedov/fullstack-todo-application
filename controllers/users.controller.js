const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const dotenv = require("dotenv")
dotenv.config()

const User = require("../models/users.model")

const SECRET_KEY = process.env.SECRET_KEY

const cookieOpts = {
    sameSite: true,
    httpOnly: true,
    secure: true,
}

module.exports = {
    async register(req, res) {
        try {
            const { first_name, last_name, email, password } = req.body
            const hashed = await bcrypt.hash(password, 10)
            const doc = await User.create({
                first_name,
                last_name,
                email,
                hashed,
            })
            const token = jwt.sign({ id: doc.id }, SECRET_KEY)
            res.status(201).cookie("token", token, cookieOpts).send(doc)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email })
            const match = await bcrypt.compare(password, user.hashed)
            if (match) {
                res.status(403)
            }
            const token = jwt.sign({ id: user.id }, SECRET_KEY)
            res.status(200).cookie("token", token, cookieOpts).send(user)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async account(req, res) {
        try {
            const { token } = req.cookies
            if (!token) return res.sendStatus(401)

            const decoded = jwt.verify(token, SECRET_KEY)
            if (!decoded) return res.sendStatus(401)

            const record = await User.findById(decoded.id)
            if (!record) return res.sendStatus(401)

            res.send(record)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    async logout(_, res) {
        try {
            res.clearCookie("token").end()
        } catch (error) {
            res.status(500).send(error)
        }
    },
}
