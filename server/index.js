const express = require("express");
const app = express();
const { getRandomTemplate } = require("./controller/madController");

app.use(express.json());

app.get("/api/madliby", getRandomTemplate);

const port = 19711;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));
