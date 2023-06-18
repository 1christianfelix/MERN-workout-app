const express = require("express");
const {
  getWorkout,
  getWorkouts,
  createWorkout,
} = require("../controllers/WorkoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET single workout
router.get("/:id", getWorkout);

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
