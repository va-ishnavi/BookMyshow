


require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToMongo = require("./db/connectToMongo.js"); // Adjust the path accordingly
const bookingRoutes = require("./routes/routes.js"); // Adjust the path accordingly

const app = express();

// Connect to MongoDB
connectToMongo();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", bookingRoutes); // Use the booking routes

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
