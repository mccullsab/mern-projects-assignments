const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name required"],
        minlength: [3, "must be at least 3 characters"]
        },
    position: {
        type: String,
        required: [true, "position required"],
        minlength: [3, "must be at least 3 characters"]
    },
    image: {
        type: String,
        required: [true, "img required"]

    },
    statusGameOne: {
        type: String,
        default: 'Undecided'
    },
    statusGameTwo: {
        type: String,
        default: 'Undecided'
    }, 
    statusGameThree: {
        type: String,
        default: 'Undecided'
    }
}, { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;