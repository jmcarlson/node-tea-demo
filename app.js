var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var https = require('https');
var products = require('./models/products.js');
var controller = require('./controllers/index-controller.js');

var localKey = fs.readFileSync('/Users/student/projects/privatekey.pem');
var localCert = fs.readFileSync('/Users/student/projects/cert.pem');

var options = {
	key: localKey,
	cert: localCert
}


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', controller.index);


// var server = app.listen(3188, function() {
// 	console.log('Express server listening on port ' + server.address().port);
// });

var server = https.createServer(options, app);
server.listen(3188,'localhost');
