const express = require("express");
const router = express.Router();
const Anime = require("../models/Anime");

router.get("/", async (req, res) => {
  try {
    const animes = await Anime.find();
    return res.json(animes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id);
    if (!anime) {
      return res.status(404).json({ message: "Anime not found" });
    }
    res.json(anime);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
