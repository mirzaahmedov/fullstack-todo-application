const Todo = require("../models/todos.model")

module.exports = {
    async add(req, res) {
        try {
            const { content, date, done } = req.body
            const record = await Todo.create({
                content,
                date,
                done,
                author_id: req.auth.id,
            })
            res.status(201).send({ ok: true, record: record })
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async update(req, res) {
        try {
            const record = await Todo.findOne({ _id: req.query.id })
            if (!record.author_id.equals(req.auth.id))
                return res.sendStatus(403)
            const changes = await record.update(req.body)
            res.status(200).send(changes)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async delete(req, res) {
        try {
            const record = await Todo.findOne({ _id: req.query.id })
            if (!record.author_id.equals(req.auth.id))
                return res.sendStatus(403)
            await record.remove()
            res.status(200).send({ ok: true })
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async get(req, res) {
        try {
            const records = await Todo.find({ author_id: req.auth.id })
            res.status(200).send(records)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async toggle(req, res) {
        try {
            const record = await Todo.findOne({ _id: req.query.id })
            if (!record.author_id.equals(req.auth.id))
                return res.sendStatus(403)
            const changes = await record.update({ done: !record.done })
            res.status(200).send(changes)
        } catch (err) {
            res.status(500).send(err)
        }
    },
}
