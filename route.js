const express = require("express");
const upload = require("./util/multer");
const {
  updateVideo,
  uploadVideo,
  getVideo,
  getVideos,
} = require("./controller");

const router = express.Router();

router.get("/", getVideos);

router.get("/:id", getVideo);

router.post("/", upload.single("video"), uploadVideo);

router.patch("/edit/:id", updateVideo);

module.exports = router;
