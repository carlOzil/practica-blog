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
        } 
    },
    description: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    }
});

module.exports = model("Blog", blogSchema)