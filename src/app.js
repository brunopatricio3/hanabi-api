const express = require("express");
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

module.exports = app;
