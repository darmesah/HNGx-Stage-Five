const mongoose = require("mongoose");

const { Schema } = mongoose;

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  uploadDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("video", videoSchema);
