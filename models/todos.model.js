const mongoose = require("mongoose")
const moment = require("moment")

module.exports = mongoose.model(
    "todo",
    new mongoose.Schema(
        {
            content: {
                type: String,
                required: true,
                maxlength: 40,
            },
            done: {
                type: Boolean,
                required: true,
                default: false,
            },
            date: {
                type: Date,
                required: true,
                default: () => moment().add(1, "days"),
            },
            author_id: {
                type: mongoose.Types.ObjectId,
                required: true,
            },
        },
        {
            collection: "todos",
            toJSON: {
                transform(_, obj) {
                    delete obj.__v
                    delete obj.author_id
                    return obj
                },
            },
        }
    )
)
