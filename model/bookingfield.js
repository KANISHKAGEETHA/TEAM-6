import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
  carName: {
    type: String,
    require: true,
  },
  CusterName: {
    type: String,
    require: true,
  },
  rentalStarDate: {
    type: String,
    require: false,
  },
  rentalEndDate: {
    type: String,
    require: false,
  },
  rentalStatus: {
    type: String,
    require: true,
  },
});
const BOOKING = mongoose.model("BOOKING", bookingSchema);
export default BOOKING;
