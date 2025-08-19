const mongoose = require("mongoose");

const UserAnimeSchema = new mongoose.Schema(
  {
    anime: {
      type: mongoose.Types.ObjectId,
      ref: "Anime",
      required: true,
    },
    status: {
      type: String,
      enum: [
        "watching",
        "plan-to-watch",
        "completed",
        "rewatching",
        "paused",
        "dropped",
      ],
    },
    score: {
      type: Number,
      min: 0,
      max: 10,
    },
    progress: {
      type: Number,
      min: 0,
    },
    startDate: {
      type: Date,
    },
    finishDate: {
      type: Date,
    },
    rewatches: {
      type: Number,
      min: 0,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserAnime = mongoose.model("UserAnime", UserAnimeSchema);
module.exports = UserAnime;
