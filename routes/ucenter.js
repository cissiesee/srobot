var express = require('express');
var router = express.Router();
var user = require('../database/db').user;

//console.log(user);

router.post('/ucenter', function(req, res) {
	var query = {
		name: req.body.name,
		password: req.body.password
	};
	(function() {
		user.count(query, function(err, num) { //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
			if (num == 1) {
				console.log(query.name + ": 登陆成功 " + new Date());
				res.render('ucenter', {
					title: 'ucenter'
				});
			} else {
				console.log(query.name + ": 登陆失败 " + new Date());
				res.redirect('/');
			}
		});
	})(query);
});

module.exports = router;