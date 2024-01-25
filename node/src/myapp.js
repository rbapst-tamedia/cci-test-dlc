const express = require('express');
const https = require('https');

const port = 3000;

const app = express();
var count = 0;

const init = async () => {
  app.get('/liveness', function (req, res) {
    res.end('Alive');
  });

  app.get('/readiness', function (req, res) {
    res.end('Ready');
  });

  app.get('/', function (req, res) {
    count++;
    console.log('count=', count, 'date=', Date.now()/1000, req.originalUrl, 'was called');
    res.end('Hello, I was called ' + count.toString() + "\n");
  });

  app.listen(port, function () {
    console.log('Example app listening on port ', port, '!');
  });
};

init();
