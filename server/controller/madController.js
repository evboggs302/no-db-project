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
  likeStory: (req, res, next) => {
    const { id } = req.params;
    if (id === 0) {
      res.status(200).send(history);
    }
    if (id > 0 && id <= history.length - 1) {
      let histClone = history.slice();
      let value = history[id];
      let newIndex = id - 1;
      histClone.splice(id, 1);
      histClone.splice(newIndex, 0, value);

      history = histClone;
      res.status(200).send(history);
    }
  },
  downStory: (req, res, next) => {
    const { id } = req.params;
    if (id === history.length - 1) {
      res.status(200).send(history);
    }
    if (id < history.length - 1 && id > -1) {
      let histClone = history.slice();
      let value = history[id];
      let newIndex = id + 1;
      histClone.splice(id, 1);
      histClone.splice(newIndex, 0, value);
      history = histClone;
      res.status(200).send(history);
    }
  },
  deleteStory: (req, res, next) => {
    const { id } = req.params;
    if (id !== -1) {
      history.splice(id, 1);
      res.status(200).send(history);
    } else {
      res.status(404).send("try something else nimrod");
    }
  }
};
