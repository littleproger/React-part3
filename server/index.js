const express = require( "express");
const cors = require( "cors");
const sequelize = require("./data/db/connection.js");
const routes = require("./routes/index.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

sequelize
  .authenticate()
  .then(() => {
    return console.log("Database connection was successful");
  })
  .catch((e) => {
    return console.log(e);
  });

const port = 3050;
app.listen(port, () => {
  console.log("server starting on port", port);
});

exports.app = app;
