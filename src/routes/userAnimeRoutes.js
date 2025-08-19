const express = require("express");
const router = express.Router();
const UserAnime = require("../models/UserAnime");

router.get("/myanime", async (_req, res) => {
  try {
    const anime = await UserAnime.find().populate("anime");

    if (!anime) {
      return res.status(404).json({ message: "Anime List not found" });
    }
    res.json(anime);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/watching", async (_req, res) => {
  try {
    const anime = await UserAnime.find({
      status: { $in: ["watching", "rewatching"] },
    }).populate("anime");

    if (!anime) {
      return res.status(404).json({ message: "Anime not found" });
    }
    res.json(anime);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const anime = await UserAnime.create({
      anime: req.body.anime,
      status: req.body.status,
      score: req.body.score,
      progress: req.body.progress,
      startDate: req.body.startDate,
      finishDate: req.body.finishDate,
      rewatches: req.body.rewatches,
      notes: req.body.notes,
    });

    if (!anime) {
      return res.status(404).json({ message: "Couldn't add anime to list" });
    }

    res.status(200).json(anime);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/update/:animeId", async (req, res) => {
  try {
    const anime = await UserAnime.findOneAndUpdate(
      { _id: req.params.animeId },
      {
        $set: {
          status: req.body.status,
          score: req.body.score,
          progress: req.body.progress,
          startDate: req.body.startDate,
          finishDate: req.body.finishDate,
          rewatches: req.body.rewatches,
          notes: req.body.notes,
        },
      }
    );

    if (!anime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    res.status(200).json(anime);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/delete/:animeId", async (req, res) => {
  try {
    const anime = await UserAnime.where().findOneAndDelete({
      _id: req.params.animeId,
    });

    if (!anime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    res.status(200).json(anime);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Needs to looks in UserAnime for the "animeId"
router.get("/:animeId", async (req, res) => {
  try {
    const anime = await UserAnime.findOne({
      anime: req.params.animeId,
    });

    if (!anime) {
      return res.status(404).json({ message: "Anime not found" });
    }
    res.json(anime);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
