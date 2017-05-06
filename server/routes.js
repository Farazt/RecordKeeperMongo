module.exports = function(app) {
	app.use('/api/users', require('./api/users'));
	app.use('/api/activities', require('./api/activities'));
	app.use('/api/auth', require('./api/auth'));
	app.route('/:url(api|app|assets)/*').get(function(req, res) {
		res.send(404);
	})
	
};