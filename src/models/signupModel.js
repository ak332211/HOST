const mongoose = require('mongoose');

var signupSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },

        emls: {
            type: String,
            required: true
        },

        dob: {
            type: Date,
            required: true
        },

        gender: {
            type: String,
            required: true
        },

        nmb: {
            type: Number,
            required: true
        },

        pwd: {
            type: String,
            required: true
        },

        cpwd: {
            type: String,
            required: true
        },

        agree: {
            type: String,
            required: true
        }

    });
var signupModel = mongoose.model('users', signupSchema);
module.exports = { signupModel }