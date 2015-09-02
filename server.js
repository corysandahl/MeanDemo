var express 			= require('express'),
	app     			= express(),
	bodyParser			= require('body-parser'),
	mongoose			= require('mongoose'),
	meetupsController 	= require('./server/controllers/meetups-controller'),
	contactsController	= require('./server/controllers/contacts-controller');

// Mongo connection
mongoose.connect('mongodb://localhost:27017/mean-demo')

// Using
app.use(bodyParser());
app.use('/js', express.static(__dirname + '/client/js'));

// Routes
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/contacts.html');
});

// Meetups
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

// Contacts
app.get('/api/contacts', contactsController.list);
app.post('/api/contacts', contactsController.create);
app.delete('/api/contacts/:id', contactsController.delete);
app.put('/api/contacts/:id', contactsController.findOneAndUpdate);

// Launch and listen
app.listen(3000, function() {
	console.log("Listening on port 3000... yeah!")
});