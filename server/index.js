const express = require("express");
const app = express();
const { getData, putData } = require("./controller/madController");

app.use(express.json());

app.get("/api/madliby", getData);
app.put("/api/madliby", putData);
// app.post("/api/madliby/history", saveStory);
// app.put("/api/madliby/history/:title", editStory);
// app.delete("/api/madliby/history:title", deleteStory);

const port = 19711;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));

// http://madlibz.herokuapp.com/api/random
