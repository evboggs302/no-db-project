const express = require("express");
const app = express();
const { getData, postData } = require("./controller/madController");

app.use(express.json());

app.get("/api/madliby", getData);
app.post("/api/madliby", postData);
// app.put()
// app.delete()

const port = 19711;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));

// http://madlibz.herokuapp.com/api/random
