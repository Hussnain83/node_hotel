const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to our Hotel!");
});

const menuItemRoutes = require("./routes/menuItemRoutes");
const personRoutes = require("./routes/personRoutes");


app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
