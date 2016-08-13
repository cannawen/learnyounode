const net = require('net')

const port = process.argv[2];

const server = net.createServer(function (socket) {
	const date = new Date();
	const timeString =
		date.getFullYear() 
		+ "-"
		+ formatNumber((date.getMonth() + 1))
		+ "-"
		+ formatNumber(date.getDate())
		+ " "
		+ formatNumber(date.getHours())
		+ ":"
		+ formatNumber(date.getMinutes())
		+ "\n";
	socket.end(timeString);
})

function formatNumber(number) {
	if (number < 10) {
		return "0" + number;
	} else {
		return number;
	}
}

server.listen(port);
