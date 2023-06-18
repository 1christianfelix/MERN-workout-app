const express = require("express");
const { createWorkout } = require("../controllers/WorkoutController");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// GET single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single workout" });
});

// POST a new workout
router.post("/", createWorkout);

// DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a new workout" });
});

// UPDATE a new workout
router.patch("/", (req, res) => {
  res.json({ msg: "UPDATE a new workout" });
});

module.exports = router;
