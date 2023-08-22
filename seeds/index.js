const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");

const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
