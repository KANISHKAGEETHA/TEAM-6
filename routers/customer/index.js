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
  });
export default router;
