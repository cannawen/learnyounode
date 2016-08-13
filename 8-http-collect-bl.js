const http = require('http')
const bl = require('bl')

const url = process.argv[2];

http.get(url, function (response) {
	response.pipe(bl(function (error, data) {
		const stringData = data.toString();
		console.log(stringData.length);
		console.log(stringData);
	}));
})

