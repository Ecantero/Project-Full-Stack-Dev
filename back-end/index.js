const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const routes = require("./routes/routes");
// const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./data/schema");
const resolvers = require("./data/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

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
});

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
app.get("/logout", routes.logout);

app.get("/users", routes.users);
app.get("/user/:id", routes.getUser);
app.get("/deleteUser/:id", routes.deleteUser);

app.get("/getReview", routes.getReview);
app.post("/review", routes.review);
app.get("/deleteReview/:id", routes.deleteReview);

const PORT = process.env.PORT || 3000;

server.start().then((res) => {
  server.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(
      `Server is up and running on port ${PORT} ${server.graphqlPath}.`
    );
  });
});
