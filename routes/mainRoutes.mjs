import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("user get route");
});
router.post("/submit", (req, res) => {
  res.render("user post route");
});
router.get("/user/:name", (req, res) => {
  res.render("user put route");
});

export default router;
