const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    picsrc: {
        type: String
    },
    text: {
        type: String,
        require: true
    }
});

module.exports = model("Blog", blogSchema)