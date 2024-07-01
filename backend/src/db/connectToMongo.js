/* In this file, we are connecting our database with our backend */
require("dotenv").config(); // We will get environment variables from a .env file
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// Retrieving the MongoDB connection URI from the environment variables
const mongoURI = process.env.MONGODB_URL;

// Function to connect to MongoDB using the Mongoose library
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connection established with MongoDB server online");
  } catch (err) {
    console.error("Error while connecting to MongoDB", err);
  }
};

// Exporting the connectToMongo function
module.exports = connectToMongo;
