/* in this file we are creating the schema using mongoose for the data which we recive for the user*/

const mongoose = require("mongoose");
const { Schema } = mongoose;

// we are creating new schema by the name bookMovieSchema
const bookMovieSchema = new Schema({
  movie: { type: String,required:true}, // the name of the movie being booked is set to string
  slot: { type: String,required:true }, // the time slot for the movie set to string
  seats: {
    // the object is created for  the seat number with number  type 
    A1: { type: Number,default:0 },
    A2: { type: Number,default:0 },
    A3: { type: Number,default:0 },
    A4: { type: Number,default:0 },
    D1: { type: Number,default:0 },
    D2:{ type: Number,default:0 },
  },
});

// here we are exporting  the schema as a mongoose model
module.exports = mongoose.model("Booking", bookMovieSchema);