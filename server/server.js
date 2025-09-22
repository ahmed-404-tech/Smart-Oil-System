const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const UserRoutes = require("./routes/UserRoutes");
const OilRoutes = require("./routes/OilRoutes");
const CustomerRoutes = require("./routes/CustomerRoutes");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", UserRoutes);
app.use("/api", OilRoutes);
app.use("/api", CustomerRoutes);



app.listen(port, () => {
    console.log("Server is listenning on port: ", port);
})