const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
     });
    console.log('Connected with database...')
  } catch(err) {
    console.log(err.message);
    // Exit the process with failure
    process.exit(1);
  }
}

module.exports = connectDB;