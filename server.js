const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
app.use(express.static(__dirname));

let PORT = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(PORT);
console.log('The magic happens in port: ', PORT);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})