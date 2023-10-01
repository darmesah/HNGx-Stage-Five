const Video = require("./model");
const cloudinary = require("./util/cloudinary");

// @desc    Upload a video
// @route   /api/video
// @method  POST
exports.uploadVideo = async (req, res, next) => {
  try {
    const video = await Video.create({
      title: req.file.originalname,
      videoUrl: req.file.path,
      uploadDate: new Date().toISOString(),
    });

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "video",
      raw_convert: "google_speech",
      transformation: [
        { width: 1000, crop: "scale" },
        { quality: "auto:low" },
        { fetch_format: "auto" },
      ],
      public_id: "hngx/" + video._id,
    });

    res.status(200).json({ _id: video._id });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all videos
// @route   /api/video
// @method  GET
exports.getVideos = async (req, res, next) => {
  try {
    const videos = await Video.find();

    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

// @desc    Get a video
// @route   /api/video/:id
// @method  GET
exports.getVideo = async (req, res, next) => {
  const { id } = req.params;

  try {
    const video = await Video.findById(id);

    if (!video) {
      const error = new Error("Video file does not exist");
      error.status = 404;
      throw error;
    }

    const response = await fetch(
      "https://res.cloudinary.com/daogordsm/raw/upload/v1696172758/hngx/65198b338896c764a2c9d142.transcript"
    );
    const data = await response.text();

    const transcript = JSON.parse(data);

    res.status(200).json({
      videoData: {
        _id: video._id,
        title: video.title,
        videoUrl: video.videoUrl,
        uploadDate: video.uploadDate,
        transcript,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a video title
// @route   /api/video/:id
// @method  PATCH
exports.updateVideo = async (req, res, next) => {
  const { id } = req.param;
  const { title } = req.body;

  try {
    const video = await Video.findById(id);

    if (!video) {
      const error = new Error("Video file does not exist");
      error.status = 404;
      throw error;
    }

    video.title = title;

    const updatedVideo = await video.save();

    res
      .status(200)
      .json({ message: "Video updated successfully", updatedVideo });
  } catch (error) {
    next(error);
  }
};
