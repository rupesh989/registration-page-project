const express = require("express");

const path = require("path");
const app = express();

require("./db/conn");

const port = process.env.PORT || 3000;

// const static_path = path.join(__dirname);
// app.use(express.static());
console.log(path.join(__dirname, "../public"));
app.get("/", (req, res) => {
  res.send("Hello from Rupesh Bavaskar");
});

app.listen(port, () => {
  console.log(`Server is running at Port No. ${port}`);
});
