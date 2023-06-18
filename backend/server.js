require("dotenv").config();

// importing express
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// creating an express app
const app = express();

// global middleware

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log("listenening on port 4000!");
});
