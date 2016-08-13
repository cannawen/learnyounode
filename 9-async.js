const http = require('http')
const bl = require('bl')

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

http.get(url1, function (response1) {
	handleResponse(response1);
	http.get(url2, function (response2) {
		handleResponse(response2)
		http.get(url3, function (response3) {
			handleResponse(response3)
		})
	})
})

function handleResponse(response) {
	response.pipe(bl(function (error, data) {
		const stringData = data.toString();
		console.log(stringData);
	}))
}
