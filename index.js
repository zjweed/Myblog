var express = require('express');
var app = express();
var webhook = require("./webhook");
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use("/webhook", webhook);
var server = app.listen(9001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});