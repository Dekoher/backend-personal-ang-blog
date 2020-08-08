const express = require('express');

const app = express();

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});

app.get('/', function(req, res) {
  res.send('Hello from node.js!');
});

require('./articles')(app);