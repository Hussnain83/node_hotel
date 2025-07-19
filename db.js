const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/hotels";

// set up the mongodb connection

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
// Mongoose maintains a default connection object representing the mongodb coneection

const db = mongoose.connection;

// define even listeners for database connection

db.on("connected", () => {
  console.log("connected to Mongodb server");
});

db.on("error", (err) => {
  console.error("MongoDb connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDb disconnected");
});

module.exports = { db };
