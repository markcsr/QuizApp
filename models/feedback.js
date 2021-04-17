const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
});

module.exports = new mongoose.model("Feedback", UserSchema);