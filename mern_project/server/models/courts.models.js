const mongoose = require('mongoose');

const CourtScheuma = new mongoose.Schema({
    website: {
        type: String
    },
    address: {
        type: String,
        required: [true, "address required"],
        minlength: [3, "must be at least 3 characters"]
    },
    long: {
        type: String
    },
    lat: {
        type: String
    }
}, { timestamps: true });

const Court = mongoose.model('Court', CourtScheuma);

module.exports = Court;