const express = require("express");
const app = express();
const {
  getData,
  putData,
  saveStory,
  likeStory,
  downStory,
  deleteStory
} = require("./controller/madController");

app.use(express.json());

app.get("/api/madliby", getData);
app.put("/api/madliby", putData);
app.post("/api/madliby/history", saveStory);
app.put("/api/madliby/history/dope/:id", likeStory);
app.put("/api/madliby/history/dumb/:id", downStory);
app.delete("/api/madliby/history/:id", deleteStory);

const port = 19711;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));

// http://madlibz.herokuapp.com/api/random
