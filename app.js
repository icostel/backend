const http = require('http');
const open = require('open');
const fs = require('fs');

//connection stuff
const hostname = '127.0.0.1';
const port = 3000;

//API stuff
const API_USER_ENDPOINT = '/api/users';
const SERVER_URL = `http://127.0.0.1:3000`;

const server = http.createServer((req, res) => {
  if (req.url === API_USER_ENDPOINT) {
    let userData = fs.readFileSync('models.json')
  	res.write(userData.toString());
  	res.statusCode = 200;
  	res.end();
  }
});

open(`${SERVER_URL}${API_USER_ENDPOINT}`);

server.listen(port, hostname, () => {
  console.log(`Server running at ${SERVER_URL}`);
});