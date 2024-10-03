import { Router, request, response } from "express";
import Customer from "../../model/customerfield.js";
const router = Router();
router.post("/post", async (req, res) => {
  try {
    const customer = Customer(req.body);
    await customer.save();
    res.send("created");
  } catch (error) {
    res.send("error");
  }
}),
  router.get("/get", async (req, res) => {
    try {
      const customer = await Customer.find();
      res.send(customer);
    } catch (error) {
      res.send("error");
    }
  }),
  router.put("/put/:id", async (req, res) => {
    try {
      const customer = await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!customer) {
        return res.send("Customer is not found");
      }
      res.send(customer);
    } catch (error) {
      res.send("error");
    }
  });
router.delete("/delete/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.send("customer is not found");
    }
    res.send("deleted");
  } catch (error) {
    res.send(error);
  }
});
export default router;
