const express = require("express");
const router = express.Router();
const Booking = require("../db/schema"); // Adjust the path if schema.js is in a different directory

// Middleware to parse request bodies
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Route to handle booking request
router.post("/booking", async (req, res) => {
  try {
    const { movie, slot, seats } = req.body;

    // Creating a new instance of the booking schema with the provided data
    const newBooking = new Booking({ movie, slot, seats });

    // Saving the new booking data to the database
    const savedBooking = await newBooking.save();

    // When the booking is successful, send a success message with the data
    res.status(200).json({ data: savedBooking, message: "Booking successful!" });
  } catch (error) {
    // When booking is not successful, send an error message
    res.status(500).json({
      data: null,
      message: "Something went wrong! Please try again.",
    });
  }
});

// Route to get the data of the most recent booking
router.get("/booking", async (req, res) => {
  try {
    // Finding the most recent booking from the database
    const recentBooking = await Booking.find().sort({ _id: -1 }).limit(1);

    if (recentBooking.length === 0) {
      // If no booking data is found, send a response with null data and a message
      res.status(200).json({ data: null, message: "No previous booking found!" });
    } else {
      // If booking data is found, send a success response with the booking data
      res.status(200).json({ data: recentBooking[0] });
    }
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({
      data: null,
      message: "Something went wrong! Please try again.",
    });
  }
});

module.exports = router;
