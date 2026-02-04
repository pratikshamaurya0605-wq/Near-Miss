const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    description: String,
    image: String,
    latitude: Number,
    longitude: Number,

    status: {
        type: String,
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Report", reportSchema);
