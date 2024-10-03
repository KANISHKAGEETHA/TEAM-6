import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import car from "./routers/car/index.js";
import customer from "./routers/customer/index.js";
import booking from "./routers/booking/index.js";
const app = express();
dotenv.config();
app.use(bodyParser.json());
const PORT = process.env.PORT;
app.use("/car", car);
app.use("customer", customer);
app.use("/booking", booking);
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MONGODB IS CONNECTED");
  app.listen(PORT, () => {
    console.log("server is start", PORT);
  });
});
