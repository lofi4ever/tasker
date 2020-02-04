const http = require('http');
const express = require('express');

const handler = express();

handler
  .use(express.static(`${__dirname}/public`))
  .get('/api', (req, res) => {
    res.send('message from express');
  });

http.createServer(handler)
  .listen(3000, () => console.log('run'));