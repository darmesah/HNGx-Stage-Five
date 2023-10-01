const error404 = (req, res) => {
  return res.status(404).json({ message: "Could not find this route" });
};

module.exports = error404;
