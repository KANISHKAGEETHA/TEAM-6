import { Router, request, response } from "express";
import BOOKING from "../../model/bookingfield.js";
const router = Router();
router.post("/post", async (req, res) => {
  try {
    const booking = BOOKINGr(req.body);
    await booking.save();
    res.send("created");
  } catch (error) {
    res.send("error");
  }
}),
  router.get("/get", async (req, res) => {
    try {
      const booking = await BOOKING.find();
      res.send(booking);
    } catch (error) {
      res.send("error");
    }
  });
export default router;
