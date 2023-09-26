const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;
