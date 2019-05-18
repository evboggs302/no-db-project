var apiData = {
  title: "",
  variables: [],
  template: []
};

var history = [];

module.exports = {
  getData: (req, res, next) => {
    res.status(200).send(apiData);
  },
  putData: (req, res, next) => {
    let { title, blanks, value } = req.body;
    apiData.title = title;
    apiData.variables = blanks;
    apiData.template = value;
    res.status(200).send(apiData);
  },
  saveStory: (req, res, next) => {
    history.push(req.body);
    res.status(200).send(history);
  },

  editStory: (req, res, next) => {
    const { id } = req.params;
    console.log("the id of the clicked story= ", id);
    const { new_values } = req.query;
    console.log("the values of query= ", new_values);
    console.log("this is the hist arr on the server=", history);
    // if (id !== -1) {
    //   history[id].string = new_values;
    // }

    res.status(200).send(new_values);
  },

  deleteStory: (req, res, next) => {
    const { id } = req.params;
    if (id !== -1) {
      history.splice(id, 1);
      res.status(200).send(history);
    } else {
      res.status(404).send("Not Found");
    }
  }
};
