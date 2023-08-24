const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    pic: {
        src: {
            type: String
        },
        alt: {
            type: String
        }
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = model("Blog", blogSchema)