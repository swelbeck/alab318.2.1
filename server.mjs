// ALAB 318.2.1: Building an Express Application

// Imports
import express from "express";
import pug from "pug";
import userRoutes from "./routes/mainRoutes.mjs";

// Initialize express into a variable
const app = express();
const PORT = 3000;

// serve static files
app.use(express.static("./images/pug.jpg"));

// error handler
app.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

app.use("/", userRoutes);

// App.listen should alwasy be the last thing in your server
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
