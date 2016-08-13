const net = require('net')
const strftime = require('strftime')

const port = process.argv[2];

const server = net.createServer(function (socket) {
	const timeString = strftime("%Y-%m-%d %H:%M\n", new Date());
	socket.end(timeString);
});

server.listen(port);
