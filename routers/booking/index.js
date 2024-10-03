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
  }),
  router.put("/put/:id", async (req, res) => {
    try {
      const booking = await BOOKING.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!booking) {
        return res.send("BOOKING is not found");
      }
      res.send(booking);
    } catch (error) {
      res.send("error");
    }
  });
router.delete("/delete/:id", async (req, res) => {
  try {
    const booking = await BOOKING.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.send("BOOKING is not found");
    }
    res.send("deleted");
  } catch (error) {
    res.send(error);
  }
});
export default router;
