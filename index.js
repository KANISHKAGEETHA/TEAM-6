// Task 1
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const carSchema = new mongoose.Schema({
  carName: String,
  brand: String,
  seatingCapacity: Number,
  availableStatus: Boolean,
});

const car = mongoose.model("car", carSchema);

const port = process.env.PORT || 4000;

const url =
  process.env.MONGODB_URL ||
  "mongodb+srv://kanishka:kani%402005@cluster0.uvres.mongodb.net/";

const app = express();
app.use(bodyParser.json());

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log("DB connection error:", err));
