const express = require('express');
const open = require('open');
const fs = require('fs');

//connection stuff
const HOST_NAME = '127.0.0.1';
const PORT = 3000;
const app = express();

//API stuff
const SERVER_URL = `http://${HOST_NAME}:${PORT}`;

app.get('/api/users', (req, res) => {
  let userData = fs.readFileSync('models.json');
  res.write(userData.toString());
  res.statusCode = 200;
  res.end();
});

app.get('/api/users/:id', (req, res) => {
  var userData = fs.readFileSync('models.json');
  var users = JSON.parse(userData)['items'];
  for(var i = 0 ; i < users.length; i++) {
  	if (users[i]['id'] === req.params['id']) {
  	  res.statusCode = 200;
  	  res.write(JSON.stringify(users[i]));
  	  res.end();
  	}
  }

  res.statusCode = 404;
  res.write('user not found, recheck id');
  res.end();
});

open(`${SERVER_URL}/api/users/1`);

app.listen(PORT, HOST_NAME, () => console.log(`Server running at ${SERVER_URL}`));