var express = require('express');
var router = express.Router();

router.get('/login', function(req, res) {
	console.log('login');
	res.render('login', {
		title: 'login'
	});
});

module.exports = router;