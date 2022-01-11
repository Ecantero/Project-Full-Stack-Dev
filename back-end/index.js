const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const routes = require("./routes/routes");
const cors = require("cors");
const path = require("path");

const app = express();
