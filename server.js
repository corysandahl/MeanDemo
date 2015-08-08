var express 			= require('express'),
	app     			= express(),
	bodyParser			= require('body-parser'),
	mongoose			= require('mongoose'),
	meetupsController 	= require('./server/controllers/meetups-controller');

// Mongo connection
mongoose.connect('mongodb://localhost:27017/mean-demo')

// Using
app.use(bodyParser());
app.use('/js', express.static(__dirname + '/client/js'));


// Routes
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.get('/api/meetups', meetupsController.list);

app.post('/api/meetups', meetupsController.create)

app.listen(3000, function() {
	console.log("Listening on port 3000...")
});