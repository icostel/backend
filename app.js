const express = require('express');
const open = require('open');
const fs = require('fs');

//connection stuff
const HOST_NAME = '127.0.0.1';
const PORT = 3000;
const app = express();

//API stuff
const API_USER_ENDPOINT = '/api/users';
const SERVER_URL = `http://${HOST_NAME}:${PORT}`;

app.get(API_USER_ENDPOINT, (req, res) => {
  if (req.url === API_USER_ENDPOINT) {
    let userData = fs.readFileSync('models.json')
  	res.write(userData.toString());
  	res.statusCode = 200;
  	res.end();
  }
});

open(`${SERVER_URL}${API_USER_ENDPOINT}`);

app.listen(PORT, HOST_NAME, () => console.log(`Server running at ${SERVER_URL}`));