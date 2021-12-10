const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongodb connected on ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
