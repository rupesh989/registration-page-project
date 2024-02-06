const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost:27017/projectRegistration",

    {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // UseCreateIndex: true,
    }
  )
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(`No Connection`);
    console.log(e);
  });
