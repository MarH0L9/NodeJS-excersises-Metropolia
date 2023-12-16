const express = require('express');
const router = express.Router();
const Car = require('./models/cars');

// GET request for list of all cars.
router.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        console.error(err);
        res.json({ message: err });
    }
    
})

//Add a new car
router.post('/cars', async (req, res) => {
    const car = new Car({
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color,
        year: req.body.year
    });
    try {
        const savedCar = await car.save();
        res.status(201).json({ savedCar });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
})

//Get a specific car
router.get('/cars/:carId', async (req, res) => {
    try {
        const car = await Car.findById(req.params.carId);
        res.json(car);
    } catch (err) {
        res.json({ message: err });
    }
})

// Delete a specific car
router.delete('/cars/:carId', async (req, res) => {
    try {
        const response = await Car.deleteOne({ _id: req.params.carId });
        if (response.deletedCount === 0) {
            res.status(404).json({ message: "Car not found" });
        } else {
            res.status(200).json({ message: "Car deleted" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

//Update a specific car
router.put('/cars/:carId', async (req, res) => {
    const response = await Car.findOneAndUpdate({ _id: req.params.carId }, req.body);
    if (response === null) {
      return res.status(404).json({ message: "Car not found" });
    }
    return res.status(200).json({ message: "Car updated" });
  })

  module.exports = router;