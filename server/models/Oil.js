const mongoose = require("mongoose");

const OilSchema = new mongoose.Schema({
    type: {type: String, required: true},
    grade: {type: String, required: true},
    brand: {type: String, required: false},
    cars: {type: [String], required: false},
    volume: {type: Number, required: true},
    buyPrice: {type: Number, required: true},
    sellPrice: {type: Number, required: true},
    stock: {type: Number, required: true},
    expire: {type: String, required: true},
}, {timestamps: true});

const Oil = mongoose.model("Oil", OilSchema);

module.exports = Oil;