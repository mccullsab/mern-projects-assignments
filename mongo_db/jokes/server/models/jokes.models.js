const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup required"],
        minlength: [6, "must be at least 6 character"]
    },
    punchline: {
        type: String,
        required: [true, "punchline required"],
        minlength: [6, "must be at least 6 character"]
    }
}, { timestamps: true });

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;