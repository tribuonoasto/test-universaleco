const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes");
const app = express();

const { mongoConnect } = require("./config/mongo");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
app.use(errorHandler);

mongoConnect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
