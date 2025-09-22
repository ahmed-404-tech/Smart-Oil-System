const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    oil: { type: mongoose.Types.ObjectId, ref: "Oil", required: true },
    currentKM: { type: Number, required: true },
    nextKM: { type: Number, required: true },
    replaceOilFilter: { type: Boolean, default: false },
    replaceGasolineFilter: { type: Boolean, default: false },
}, { timestamps: true });

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;