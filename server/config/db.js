const mongoose = require('mongoose');

const connectDB = async() => {
  const conn = await mongoose.connect(process.env.MONGO_URL
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true, 
    )
  console.log(`MongoDB Connnected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;