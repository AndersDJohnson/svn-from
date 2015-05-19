var fs = require('fs');
var execSync = require('sync-exec');

var svnFrom = {};

svnFrom.url = function (url) {
	url = url.trim();
	if (! url) return null;
	// console.log(url);
	var cmd = 'svn log --verbose --stop-on-copy ' + url + '';
	// console.log(cmd);
	var res = execSync(cmd);
	var stdout = res.stdout;
	var m = stdout.match(/\(from (.*?):(.*?)\)/)

	return {
		url: url,
		from: {
			path: m[1],
			rev: m[2]
		}
	};
};

svnFrom.urls = function (urls) {
	return urls
		.map(svnFrom.url)
		.filter(function (i) {
			return i;
		});
};

module.exports = svnFrom;
