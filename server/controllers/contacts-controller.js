var Contact = require('../models/contact');

module.exports.list = function(req, res) {
	Contact.find().sort({name: 1}).exec(function(err, results) {
		res.json(results);
	});
}

module.exports.findOne = function(req, res) {
	var conditions = {_id: req.params.id};
	console.log(conditions);
	Contact.find(conditions).exec(function(err, results) {
		res.json(results);
	});
}

module.exports.create = function(req, res) {
	var contact = new Contact(req.body);
	contact.save(function(err, result) {
		res.json(result);
	});
}

module.exports.delete = function (req, res) {
	Contact.remove({"_id": req.params.id}, function(err, service) {
		if (err) {
			console.log(err);
		} else {
			res.json({ message: 'deleted id ' + req.params._id});
		}
	});
}

module.exports.findOneAndUpdate = function (req, res) {
	var conditions = {_id: req.params.id},
		update = {
			name: req.body.name,
			email: req.body.email,
			company: req.body.company,
			title: req.body.title,
			contacted: req.body.contacted
		},
		options = {upsert: true};

	Contact.update(conditions, update, options, function(err, result) {
		res.json(result);
	});
}