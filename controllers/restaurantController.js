const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant");

router.get("/api/restaurants", (req, res) => {
  Restaurant.find()
    .then((allRestaurants) => {
      res.json(allRestaurants);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/api/restaurants/:id", (req, res) => {
  Restaurant.findById(req.params.id)
    .then((foundRestaurant) => {
      if (foundRestaurant) {
        res.json(foundRestaurant);
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.post("/api/restaurants", (req, res) => {
  Restaurant.create(req.body)
    .then((newRestaurant) => {
      res.json(newRestaurant);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).end();
    });
});

router.put("/api/restaurants/:id", (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedRestaurant) => {
      res.json(updatedRestaurant);
    }
  );
});

router.delete("/api/restaurants/:id", (req, res) => {
  Restaurant.findByIdAndDelete(req.params.id)
    .then((deletedRestaurant) => {
      res.json(deletedRestaurant);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

module.exports = router;
