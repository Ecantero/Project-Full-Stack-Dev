
const runCrudOperations = require('./routes/routes.js');
const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const routes = require("./routes/routes");
// const cors = require("cors");
const path = require("path");

const app = express();

const pth = __dirname + "/views/";

app.set("views", pth);
app.use(express.static(pth));
app.use(bodyParser.json());
// app.use(cors(corsOp));

app.use((req, res, next) => {
  res.header("Allow-Control-Access-Origin", "*");
  res.header("Allow-Control-Access-Headers", "Content-Type, Authorization");
  next();
})

var urlencodedParser = bodyParser.urlencoded({
  extended: true,
});

app.use(
  expressSession({
    secret: "It'sFreeRealEstate",
    saveUninitialized: false,
    resave: false,
  })
);

app.get("/test", (req, res) => {
    console.log("The backend is called thru the frontend");
    res.sendDate();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});
