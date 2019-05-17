var apiData = {
  title: "",
  variables: [],
  template: []
};

var history = [];

module.exports = {
  getData: (req, res, next) => {
    console.log("getData hit");
    console.log(apiData);
    res.status(200).send(apiData);
  },
  putData: (req, res, next) => {
    console.log("req.body = ", req.body);
    let { title, blanks, value } = req.body;
    apiData.title = title;
    apiData.variables = blanks;
    apiData.template = value;
    console.log(apiData);
    res.status(200).send(apiData);
  },
  saveStory: (req, res, next) => {
    console.log(req.body);
    history.push(req.body);
    // console.log("this is history", history);
    res.status(200).send(history);
  },
  editStory: (req, res, next) => {
    const { id } = req.params;

    res.status(200).send();
  },
  deleteStory: (req, res, next) => {
    const { id } = req.params;
    if (id !== -1) {
      history.splice(id, 1);
      console.log("this is the delete", id, history);
      res.status(200).send(history);
    } else {
      res.status(404).send("Not Found");
    }
  }
};
