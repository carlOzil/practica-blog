const { Schema, model } = require('mongoose');

const publisherSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'publisher'
    },
    date: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String
    }
});

module.exports = model('Publisher', publisherSchema)