import { Router, request, response } from "express";
import Car from "../../model/carfield";

const router = Router();
router.post("/post", async (req, res) => {
  try {
    const car = Car(req.body);
    await car.save();
    res.send("created");
  } catch (error) {
    res.send("error");
  }
});
router.get("/get", async (req, res) => {
  try {
    const car = await Car.find();
    res.send(car);
  } catch (error) {
    res.send("error");
  }
});
export default router;
