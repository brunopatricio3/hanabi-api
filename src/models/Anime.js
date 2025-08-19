const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  titles: {
    romaji: {
      type: String,
      required: true,
    },
    english: {
      type: String,
      required: true,
    },
    native: {
      type: String,
      required: true,
    },
  },
  releaseData: {
    releaseStatus: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    startDate: {
      day: {
        type: Number,
        default: null,
      },
      month: {
        type: Number,
        default: null,
      },
      year: {
        type: Number,
        default: null,
      },
    },
    endDate: {
      day: {
        type: Number,
        default: null,
      },
      month: {
        type: Number,
        default: null,
      },
      year: {
        type: Number,
        default: null,
      },
    },
  },
  details: {
    format: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    countryOfOrigin: {
      type: String,
      required: true,
    },
    episodeNumber: {
      type: Number,
      required: true,
    },
    episodeLength: {
      type: Number,
      required: true,
    },
  },
  genres: {
    type: [String],
    required: true,
  },
  image: {
    coverImage: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: false,
    },
  },
});

const Anime = mongoose.model("Anime", AnimeSchema);
module.exports = Anime;
