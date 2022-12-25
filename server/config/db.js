const mongoose = require("mongoose");
require("dotenv").config();

// const dbID = process.env.DB_ID;
const dbPassword = process.env.DB_PASSWORD;
mongoose.set("strictQuery", false);
const connection = mongoose.connect("mongodb://127.0.0.1:27017/cointab");
// const connection = mongoose.connect(`mongodb+srv://cointab:cointab123@cluster0.lpkzr1u.mongodb.net/?retryWrites=true&w=majority`)

module.exports = connection;

