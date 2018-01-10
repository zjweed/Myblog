var express = require('express');
var app = express();
var webhook = require("./webhook");
var getimage= require("./getimage");
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use("/webhook", webhook);
app.use("/getimage", getimage);
var server = app.listen(9001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
