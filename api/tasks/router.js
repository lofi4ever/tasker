const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Task = require('./model.js');

router
	.get('/', getTasks)
	.post('/', jsonParser, saveTask);

function getTasks(req, res) {
	Task.find({}, (err, docs) => {
		if(err) return console.log(err);
		res.send(docs);
	});
}

function saveTask(req, res) {
	let {title, text} = req.body;
	new Task({
		title: title,
		text: text
	}).save()
	.then(doc => {
		res.send(doc);
	}).catch(err => {
		res.sendStatus(400);
		console.log(err);
	});
}

module.exports = router;