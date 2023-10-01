const multer = require("multer");

const now = new Date();
const formattedDate = now.toISOString().replace(/[:.]/g, "-");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/videos");
  },

  filename: function (req, file, cb) {
    cb(null, formattedDate + " - " + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
