const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 5000;

app.listen(5000, () => {
  console.log(`Lab Server has started on ${port} `);
});
