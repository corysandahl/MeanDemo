var Meetup = require('../models/meetup')

module.exports.create = function (req, res) {
	var meetup = new Meetup(req.body);
	meetup.save(function(err, result) {
		res.json(result);
		console.log('saved ' + JSON.stringify(result))
	});
}

module.exports.delete = function (req, res) {
	Meetup.remove({"_id": req.params._id}, function(err, service) {
		if (err) {
			console.log(err);
		} else {
			res.json({ message: 'deleted id ' + req.params._id});
		}
	});
}

module.exports.list = function(req, res) {
	Meetup.find({}, function(err, results) {
		res.json(results);
	})
}