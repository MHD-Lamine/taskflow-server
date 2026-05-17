const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const protect = require("./middlewares/authMiddleware");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "TaskFlow API running",
  });
});
app.get("/api/profile", protect, (req, res) => {
  res.json(req.user);
});

app.use("/api/auth", authRoutes);

module.exports = app;