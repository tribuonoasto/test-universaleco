const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes");
const app = express();
const cors = require("cors");

const { mongoConnect } = require("./config/mongo");
const port = 3001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
app.use(errorHandler);

mongoConnect().then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
});
