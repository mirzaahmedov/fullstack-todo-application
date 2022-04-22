const mongoose = require("mongoose")

module.exports = mongoose.model(
    "user",
    new mongoose.Schema(
        {
            first_name: {
                type: String,
                required: true,
            },
            last_name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
                unique: true,
            },
            hashed: {
                type: String,
                required: true,
            },
        },
        {
            collection: "users",
            toJSON: {
                transform(_, obj) {
                    delete obj.__v
                    delete obj._id
                    delete obj.hashed
                    return obj
                },
            },
        }
    )
)
