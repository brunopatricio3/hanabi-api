const express = require("express");
import path from "path";
const cors = require("cors");
require("dotenv").config();

const animeRoutes = require("./routes/animeRoutes"); // correct relative path
const userAnimeRoutes = require("./routes/userAnimeRoutes"); // correct relative path
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route
app.use("/api/anime", animeRoutes);
app.use("/api/useranime", userAnimeRoutes);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

module.exports = app;
