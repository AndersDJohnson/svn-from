var svnFrom = require('./');
var fs = require('fs');

var file = process.argv[2];

if (! file) {
	throw Error("Must provide file argument.");
}

var text = fs.readFileSync(file, 'utf8');
var lines = text.split(/[\n\r]/);

var results = svnFrom.urls(lines);

results.forEach(function (res) {
	console.log(res.url);
	console.log(' => ' + res.from.path + '@' + res.from.rev);
});
