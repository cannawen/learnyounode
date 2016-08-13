const http = require('http')

const url = process.argv[2];

let data = '';

http.get(url, function (response) {
	response
		.setEncoding('utf8')
		.on('data', function (partialData) {
			data += partialData;
		})
		.on('end', function() {
			console.log(data.length);
			console.log(data);
		})
});
