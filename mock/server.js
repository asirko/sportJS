var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
require('./route')(app);

app.listen(3000, function () {
  console.log('Mock app listening on port 3000!');
});
