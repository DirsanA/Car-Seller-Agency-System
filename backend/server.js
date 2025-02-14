const express = require("express");

const app = express();
const port = 3000;
app.get("/", function (req, res) {
  res.send("Hello from the port 3000");
});
app.listen(port, function () {
  console.log(`The server is listening at port ${port}....`);
});
