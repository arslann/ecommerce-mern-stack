const mongoose = require('mongoose');

const db =
  'mongodb+srv://testuser:testuser@cluster0.p3yoqkc.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log('MongoDB Connected...');
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;
