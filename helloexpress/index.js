const express = require('express');

const app = express();

const port = 3000;

app.get("/home", (req, res) => {
  res.send("Welcome to our page");
})

app.get("/about", (req, res) => {
  res.send("About us...");
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
