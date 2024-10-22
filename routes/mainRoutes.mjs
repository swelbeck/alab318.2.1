import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});
router.post("/submit", (req, res) => {
  res.render("success", { title: "Form Submitted", data: req.body });
});
router.get("/user/:name", (req, res) => {
  res.render("user", {
    title: `Hello, ${req.params.name}`,
    name: req.params.name,
  });
});

export default router;
