var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var port = 3001;
app.get('/', function(req, res) {
	request('https://facebook.github.io/react/docs/react-dom-server.html', function(error, response, document) {
		if (!error && response.statusCode == 200) {
			$ = cheerio.load(document); //当前的$,它是拿到了整个document的前端选择器
			console.log($('title').text()); //我博客的获取用户名
		} else {
			console.log("思密达，没爬取到用户名，再来一次");
		}
	})
});
app.listen(port, function() {
	console.log('slider working on localhost:' + port);
});