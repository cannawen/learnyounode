const http = require('http')
const bl = require('bl')

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

http.get(url1, function (response) {
	response.pipe(bl(function (error, data) {
		const stringData = data.toString();
		console.log(stringData);

		http.get(url2, function (response) {
			response.pipe(bl(function (error, data) {
				const stringData = data.toString();
				console.log(stringData);

				http.get(url3, function (response) {
					response.pipe(bl(function (error, data) {
						const stringData = data.toString();
						console.log(stringData);
					}))
				})
			}))
		})
	}))
})
