const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Rupesh Bavaskar");
});

app.listen(port, () => {
  console.log(`Server is running at Port No. ${port}`);
});
