const jwt = require("jsonwebtoken")

const dotenv = require("dotenv")
dotenv.config()

module.exports = function (req, res, next) {
    try {
        const { token } = req.cookies
        if (!token) return res.sendStatus(401)
        const auth = jwt.verify(token, process.env.SECRET_KEY)
        if (!auth) return res.sendStatus(403)
        req.auth = auth
        next()
    } catch (err) {
        res.status(500).send(err)
    }
}
