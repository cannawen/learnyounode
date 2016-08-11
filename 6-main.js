const findFiles = require('./6-module');

const directoryPath = process.argv[2];
const extension = process.argv[3];

findFiles(directoryPath, extension, function (error, files) {
	files.forEach(function (file) {
		console.log(file);
	});
});
