const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 8080;

const RestaurantController = require("./controllers/restaurantController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/restaurant-locator",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Mongoose successfully connected!");
  })
  .catch((err) => {
    console.log("Mongoose connection error: err");
  });

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use(RestaurantController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
