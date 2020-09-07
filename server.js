const express = require('express');
const cors = require('cors');
const sql = require('./sql');

const app = express();

var corsOptions = {
  origin: ['http://localhost:4200', 'http://localhost:4201']
};

app.use(cors(corsOptions));

app.listen(8000, () => {
  console.log('Server listening on port 8000');
  sql.init();
});

app.get('/', function(req, res) {
  res.send('Hello from node.js!');
});

require('./articles')(app, sql);