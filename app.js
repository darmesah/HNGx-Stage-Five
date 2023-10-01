const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const routes = require("./route");

const error404 = require("./middleware/404");
const errorHandler = require("./middleware/errorHandler");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/videos", routes);

app.use(error404);
app.use(errorHandler);

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(PORT);
    console.log("Server started at " + PORT);
  })
  .catch((err) => console.log(err));
