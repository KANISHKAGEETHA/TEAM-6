import mongoose from "mongoose";
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: false,
  },
});
const Customer = mongoose.model("Customer", customerSchemaSchema);
export default Customer;
