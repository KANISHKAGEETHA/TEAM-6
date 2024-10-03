import mongoose from "mongoose";
const carSchema = new mongoose.Schema({
  carName: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  seatingCapacity: {
    type: String,
    require: false,
  },
  availableStatus: {
    type: Number,
    require: Boolean,
  },
});
const Car = mongoose.model("Car", carSchema);
export default Car;
