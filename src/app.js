const express = require("express");

const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");

const port = process.env.PORT || 3000;

// console.log(path.join(__dirname, "../public"));
// const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// app.use(express.static(static_path)); // delete it after public index deleted
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  // res.send("Hello from Rupesh Bavaskar");
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running at Port No. ${port}`);
});
