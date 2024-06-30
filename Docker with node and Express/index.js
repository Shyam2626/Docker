const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "John",
    age: 45,
    email : 'john@gmail.com',
    password : 12345
  });
});
app.listen(3000, () => {
  console.log("Sever Started");
});
