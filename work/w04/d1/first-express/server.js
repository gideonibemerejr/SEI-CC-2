//Load express
const express = require("express");
const path = require("path");

// todo 'database'
const todoDb = require("./data/todo-db");

//create the express app
const app = express();

// Configure the app (app.set)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Mount middleware (app.use)

// Mount Routes
app.get("/", function(req, res) {
  res.redirect("/home");
});

app.get("/home", function(req, res) {
  res.render("home");
});

app.get("/todos", function(req, res) {
  res.render("todos/index", {
    todos: todoDb.getAll()
  });
});

//Tell the app to list on port 3000
app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
