const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const handler = express();

handler
	.use(express.static(`${__dirname}/public`))
	.use('/api/tasks', require('./api/tasks/router.js'));

mongoose.connect('mongodb://localhost:27017/tasksdb', {useNewUrlParser: true}, (err) => {
	if(err) return console.log(err);
	http.createServer(handler)
  .listen(3000, () => console.log('run'));
});