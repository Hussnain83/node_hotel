const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const passport = require("./auth");



const PORT = process.env.PORT || 3000;

// Middleware Function

const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
  next();
}

app.use(logRequest); // Middle ware for all


app.use(passport.initialize());

const bodyParser = require("body-parser");
app.use(bodyParser.json());


const localAuthMiddleware = passport.authenticate("local", {session: false});

app.get("/" ,(req, res) => {
  res.send("Welcome to our Hotel!");
});

const menuItemRoutes = require("./routes/menuItemRoutes");
const personRoutes = require("./routes/personRoutes");


//localAuthMiddleware, at between /person
app.use("/person",
  personRoutes);
app.use("/menu", menuItemRoutes);


app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
