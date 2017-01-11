// var mongo = require('mongodb'),
//     Server = mongo.Server,
//     Db = mongo.Db;

// var server = new Server('localhost', 27017, {auto_reconnect: true});
// var db = new Db('foo', server);

// db.open(function(err, db) {
//     if(!err) {
//         console.log("We are connected");
//     }
// });
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/search');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型
var userScheMa = new Schema({
	name: String,
	password: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.user = db.model('users', userScheMa); //  与users集合关联