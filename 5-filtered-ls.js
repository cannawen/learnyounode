const fs = require('fs')
const path = require ('path')

const directoryPath = process.argv[2];
const extensionString = process.argv[3];

fs.readdir(directoryPath, function (err, files) {
	for (const file of files) {
		if (path.extname(file) === '.' + extensionString) {
			console.log(file);
		}
	}
});
