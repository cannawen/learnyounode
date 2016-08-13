const http = require('http')
const bl = require('bl')
const async = require('async')

const urls = [process.argv[2], process.argv[3], process.argv[4]];

async.map(urls, getData, printResponses);

function getData(url, callback) {
	http.get(url, function (response) {
		response.pipe(bl(callback))
	})
}

function printResponses(err, results) {
	for (const result of results) {
		console.log(result.toString());
	}
}
