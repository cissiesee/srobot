module.exports = function(app) {
	app.use('/', require('./routes/index'));
	app.use('/', require('./routes/login'));
	app.use('/', require('./routes/ucenter'));
	//app.use('/login', require('./routes/login'));
}
