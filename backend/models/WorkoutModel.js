const mongoose = require("mongoose");

// mongodb alone is schema-less
// we need mongoose to create schemas

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//
module.exports = mongoose.model("Workout", workoutSchema);
