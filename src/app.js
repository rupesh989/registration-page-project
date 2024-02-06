const express = require("express");

const path = require("path");
const app = express();

require("./db/conn");

const port = process.env.PORT || 3000;

// const static_path = path.join(__dirname, "../public");
// app.use(express.static(static_path)); // delete it after public index deleted
// console.log(path.join(__dirname, "../public"));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  // res.send("Hello from Rupesh Bavaskar");
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running at Port No. ${port}`);
});
