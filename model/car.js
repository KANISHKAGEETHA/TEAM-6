// model code

const carSchema = new mongoose.Schema({
  carName: String,
  brand: String,
  seatingCapacity: Number,
  availableStatus: Boolean,
});

app.get("car", async (req, res) => {
  try {
    const car = await car.find();
    res.status(200).json(car);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
