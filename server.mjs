// ALAB 318.2.1: Building an Express Application

// Imports
import express from "express";
import pug from "pug";
import userRoutes from "./routes/mainRoutes.mjs";

// Initialize express into a variable
const app = express();
const PORT = 3000;

// Set the view engine to pug
app.set("view engine", "pug");

// Set the views directory
app.set("views", "./views");

// Serve static files
app.use(express.static("./images"));

// Middleware
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});

// Error handler
app.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

// app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

// App.listen should alwasy be the last thing in your server
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
