const express = require("express");
var fileupload = require("express-fileupload");
var bodyParser = require('body-parser')

const app = express();

const userRoute = require("./routes/userRoute");
const profileRoute = require("./routes/profileRoute");

// Use body parser middleware to parse body of incoming requests
app.use(express.json());
app.use(fileupload({
  useTempFiles:true
}));
app.use(bodyParser.json());

// Routes which should handle requests
app.use("/user", userRoute);
app.use("/profile", profileRoute);
// Handle Error Requests

app.get("/", (req, res) => {
  res.send(
    'API IS NOW WORKING, append "/docs" to the current url to access API documentation'
  );
});

// Handle Error Requests
app.use((req, res, next) => {
  const error = new Error();
  error.message = "Not Found";
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ error: error });
});

module.exports = app;
