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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
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

// app.get("/", (req, res) => {
//   console.log("This message is from / call");
//   res.sendFile(pth + "index.html");
// });

app.get("/home", routes.home);

app.post("/login", urlencodedParser, routes.login);

app.get("/users", routes.users);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});
