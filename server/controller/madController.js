module.exports = {
  getRandomTemplate: (req, res, next) => {
    console.log(req.body);
    res.status(200).send("endpoint hit");
  }
};
