module.exports = {
  getData: (req, res, next) => {
    // console.log(req.body);
    res.status(200).send(req.body);
  },
  postData: (req, res, next) => {
    console.log(req.body);
    let { blanks, value } = req.body;
    let history = [];
    let title = req.body.title;
    let variables = blanks;
    let template = value;
    res.status(200).send({ variables, template, title });
  },
  postWords: (req, res, next) => {
    res.status(200);
  }
};
