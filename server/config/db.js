const mongoose = require("mongoose");

function connectDB(){
    try {
        mongoose.connect(process.env.DB_URL);
        console.log("DB Connected");
    } catch (error) {
        console.log("Cannot Connect DB");
    }
}

module.exports = connectDB;