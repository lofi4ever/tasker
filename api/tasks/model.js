const mongoose = require('mongoose');
const schema = new mongoose.Schema({
	title: {
		type: String,
		default: 'Task name'
	},
	text: String
});
const Model = mongoose.model('Task', schema);

module.exports = Model;